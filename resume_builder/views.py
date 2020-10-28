from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import *
from .utils import *
from django.views.generic import View
from django.template.loader import get_template
from django.contrib.auth.forms import UserCreationForm
from django .forms import CreateUserForm


# Create your views here.
def home(request):
    return render(request, 'resume_builder/home.html')

def registerPage(request):
    form = CreateUserForm()

    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()

    context = {'form': form}
    return render(request, 'resume_builder/register.html', context)

def loginPage(request):
    context = {}
    return render(request, 'resume_builder/login.html', context)

def choose_template(request):
    return render(request, 'resume_builder/choose_template.html')

def resume_form(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # get the end user's resume
        device_id = uuid.UUID(request.COOKIES['device'])
        current_user = get_end_user(request.user, device_id)
        resume = Resume.objects.get_or_create(end_user=current_user)[
            0]  # remove the tuple
        # create a form instance and populate it with data from the request:
        contact_form = ContactInfoForm(request.POST)
        if contact_form.is_valid():
            contact_info = contact_form.save()
            # add contact info to end user's resume
            resume.contact_info = contact_info
            resume.save()

            education_form = EducationForm(request.POST)
            if education_form.is_valid():
                education = education_form.save()
                education.resume = resume
                education.save()

        return redirect("/download_pdf/")
    # if a GET (or any other method) we'll create a blank form
    else:
        context = {'contact_form': ContactInfoForm(
        ), 'education_form': EducationForm()}
        return render(request, 'resume_builder/resume_form.html', context)


def resume(request, pk):
    resume = Resume.objects.get(id=pk)
    context = {'resume': resume}
    return render(request, 'resume_builder/resume.html', context)


def download_pdf(request):
    # get the end user's resume
    device_id = uuid.UUID(request.COOKIES['device'])
    current_user = get_end_user(request.user, device_id)
    resume = Resume.objects.get_or_create(end_user=current_user)[
        0]  # remove the tuple
    template = get_template('pdf/resume_1.html')
    context = {
        'resume': resume
    }
    html = template.render(context)
    pdf = render_to_pdf('pdf/resume_1.html', context)
    if pdf:
        response = HttpResponse(pdf, content_type='application/pdf')
        filename = "Resume.pdf"
        content = "inline; filename='%s'" % (filename)
        download = request.GET.get("download")
        if download:
            content = "attachment; filename='%s'" % (filename)
        response['Content-Disposition'] = content
        return response
    return HttpResponse("Not found")
