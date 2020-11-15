from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import *
from .utils import *
from django.views.generic import View
from django.template.loader import get_template
from django.contrib.auth.forms import UserCreationForm
from .models import *
import uuid
import json


# Create your views here.
def home(request):
    return render(request, 'resume_builder/home.html')

def registerPage(request):
    form = UserCreationForm()

    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()

    context = {'form': form}
    return render(request, 'resume_builder/register.html', context)

def loginPage(request):
    context = {}
    return render(request, 'resume_builder/login.html', context)

def accountPage(request):
    context = {}
    return render(request, 'resume_builder/account.html', context)


def choose_template(request):
    return render(request, 'resume_builder/choose_template.html')

def resume_form(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # get the end user's resume
        device_id = uuid.UUID(request.COOKIES['device'])
        current_user = get_end_user(request.user, device_id)
        #request.body contains the form data
        data = json.loads(request.body)
        #create the contact_info model
        contact_info = ContactInfo.objects.create(first_name=data['contact-first-name'], last_name=data['contact-last-name'], phone_number=data['contact-phone-number'], email=data['contact-email'])
        #create the actual resume
        resume = Resume.objects.create(end_user=current_user, contact_info=contact_info)
        #create the education objects
        for i in range(data['num-educations'] + 1):
            Education.objects.create(school=data['education-school-' + str(i)], major=data['education-major-' + str(i)], start_date=data['education-start-date-' + str(i)], end_date=data['education-end-date-' + str(i)], resume=resume)
        #download the resume
        return redirect("/download_pdf/")
    # if a GET (or any other method) we'll create a blank form
    else:
        context = {}
        return render(request, 'resume_builder/resume_form.html', context)


def resume(request, pk):
    resume = Resume.objects.get(id=pk)
    context = {'resume': resume}
    return render(request, 'resume_builder/resume.html', context)

def download_pdf(request):
    # get the end user's resume
    device_id = uuid.UUID(request.COOKIES['device'])
    current_user = get_end_user(request.user, device_id)
    resume = Resume.objects.filter(end_user=current_user).reverse()[0]  # remove the tuple
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
