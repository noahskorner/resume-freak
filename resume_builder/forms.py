from django import forms
from .models import *


class ContactInfoForm(forms.ModelForm):
    class Meta:
        model = ContactInfo
        fields = '__all__'


class EducationForm(forms.ModelForm):
    class Meta:
        model = Education
        fields = ['school', 'major', 'start_date', 'end_date', 'gpa']


class ExperienceForm(forms.ModelForm):
    class Meta:
        model = Experience
        fields = ['organization', 'start_date', 'end_date', 'responsibilities']


class ProjectForm(forms.ModelForm):
    class Meta:
        model = Project
        fields = ['name', 'responsibilities']


class SkillForm(forms.ModelForm):
    class Meta:
        model = Skill
        fields = ['name']


class HobbyForm(forms.ModelForm):
    class Meta:
        model = Hobby
        fields = ['name']
