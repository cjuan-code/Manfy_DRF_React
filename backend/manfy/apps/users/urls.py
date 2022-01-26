import imp
from venv import create
from django.urls import path
from .view import IncidentView

urlpatterns = [
    path('user/incident', IncidentView.as_view({'post':'create'}))
]