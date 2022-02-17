from django.urls import path
from .view import ReservationView

urlpatterns = [
    path('reservations', ReservationView.as_view({'post': 'create'})),
    path('reservations/<int:id>', ReservationView.as_view({'delete': 'delete'})),
    path('reservations/read', ReservationView.as_view({'get': 'read'}))
]