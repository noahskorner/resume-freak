from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('resume/<str:pk>/', views.resume, name='resume'),
    path('download_pdf/<str:pk>/', views.download_pdf, name='download_pdf'),
]
