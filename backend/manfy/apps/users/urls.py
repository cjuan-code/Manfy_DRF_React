import imp
from venv import create
from django.urls import path
from .view import IncidentView,UserView,UserInfo

urlpatterns = [
    path('user/incident', IncidentView.as_view({'post':'create'})),
    path('login', UserView.as_view({'post':'login'})),
    path('register', UserView.as_view({'post':'register'})),
    path('getUser', UserInfo.as_view({'post':'getUser'})),
]