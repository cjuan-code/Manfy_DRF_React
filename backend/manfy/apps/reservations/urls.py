from django.urls import path
from .view import ReservationView

urlpatterns = [
    path('reservations', ReservationView.as_view({'post': 'create'}))
]