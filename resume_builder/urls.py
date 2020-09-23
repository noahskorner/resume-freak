from django.urls import path

from . import views

#urlpatterns = [
#    path('', views.resume_form, name='resume_form'),
#    path('resume/<str:pk>/', views.resume, name='resume'),
#    path('download_pdf/', views.download_pdf, name='download_pdf'),
#]
urlpatterns = [
    path('', views.home, name='home'),
    path('choose_template/', views.choose_template, name='choose_template'),
    path('resume_form/', views.resume_form, name='resume_form'),
    path('resume/<str:pk>/', views.resume, name='resume'),
    path('download_pdf/', views.download_pdf, name='download_pdf'),
]
