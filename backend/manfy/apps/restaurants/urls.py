from django.urls import path
from .view import (GetRestaurants,GetImages)
from .view import TableView, RestaurantView

urlpatterns = [
    path('restaurants', GetRestaurants.as_view()),
    path('restaurants/img',GetImages.as_view()),
    path('restaurant', RestaurantView.as_view({'post': 'getRestaurant'})),
    path('tables/gettablesbyrestaurant', TableView.as_view({'post': 'getTablesByRestaurant'})),
    path('tables/getfreetablesbyrestaurant', TableView.as_view({'post': 'GetFreeTablesByRestaurant'}))
]