"""resume_freak URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', views.home, name='home'),
    path('choose_template/', views.choose_template, name='choose_template'),
    path('resume_form/', views.resume_form, name='resume_form'),
    path('resume/<str:pk>/', views.resume, name='resume'),
    path('download_pdf/', views.download_pdf, name='download_pdf'),
]

#urlpatterns = [
#    path('admin/', admin.site.urls),
#    path('', include('resume_builder.urls'))
#]