from django.urls import path
from .view import GetRestaurants

urlpatterns = [
    path('restaurants', GetRestaurants.as_view())
]