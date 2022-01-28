from django.urls import path
from .view import (GetRestaurants,GetImages)

urlpatterns = [
    path('restaurants', GetRestaurants.as_view()),
    path('restaurants/img',GetImages.as_view())
]