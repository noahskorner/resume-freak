from django.urls import path

from . import views

urlpatterns = [
    path('', views.resume_form, name='resume_form'),
    path('resume/<str:pk>/', views.resume, name='resume'),
    path('download_pdf/', views.download_pdf, name='download_pdf'),
]
