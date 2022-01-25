import imp
from django.urls import path
from .view import CreateIncident

urlpatterns = [
    path('user/incident', CreateIncident.as_view()),
]