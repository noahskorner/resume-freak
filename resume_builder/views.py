from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import *

# Create your views here.


def index(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        contact_form = ContactInfoForm(request.POST)
        education_form = EducationForm(request.POST)
        experience_form = ExperienceForm(request.POST)
        project_form = ProjectForm(request.POST)
        skill_form = SkillForm(request.POST)
        hobby_form = HobbyForm(request.POST)
        # CONTACT
        # check whether it's valid:
        if contact_form.is_valid():
            # create contact_info instance but don't save it yet
            contact_info = contact_form.save(commit=False)
            # EDUCATION
            if education_form.is_valid():
                education = education_form.save(commit=False)
                # EXPERIENCE
                if experience_form.is_valid():
                    experience = experience_form.save(commit=False)
                    # PROJECT
                    if project_form.is_valid():
                        project = project_form.save(commit=False)
                        # SKILL
                        if skill_form.is_valid():
                            skill = skill_form.save(commit=False)
                            # HOBBY
                            if hobby_form.is_valid():
                                hobby = hobby_form.save(commit=False)
                                # create new resume instance and add fk to other objects
                                contact_info.save()
                                resume = Resume.objects.create(
                                    contact_info=contact_info)
                                education.resume = resume
                                experience.resume = resume
                                project.resume = resume
                                skill.resume = resume
                                hobby.resume = resume
                                # save all objects
                                resume.save()
                                education.save()
                                experience.save()
                                project.save()
                                skill.save()
                                hobby.save()
                                url = '/resume/' + str(resume.id) + '/'
                                return redirect(url)

    # if a GET (or any other method) we'll create a blank form
    else:
        context = {'contact_form': ContactInfoForm(),
                   'education_form': EducationForm(), 'experience_form': ExperienceForm(), 'project_form': ProjectForm(), 'skill_form': SkillForm(), 'hobby_form': HobbyForm()}
        return render(request, 'resume_builder/resume_form.html', context)


def resume(request, pk):
    resume = Resume.objects.get(id=pk)
    context = {'resume': resume}
    return render(request, 'resume_builder/resume.html', context)
