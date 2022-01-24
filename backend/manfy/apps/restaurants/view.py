from .models import Restaurant,Table,Img
from rest_framework import generics, mixins, status, viewsets
from .serializers import (restaurantSerializer, imgSerializer)
from rest_framework.permissions import (AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser,)

class GetRestaurants(generics.ListAPIView):
    permission_classes = (AllowAny,)
    queryset = Restaurant.objects.all()
    serializer_class = restaurantSerializer

class GetImages(generics.ListAPIView):
    permission_classes = (AllowAny,)
    queryset = Img.objects.all()
    serializer_class = imgSerializer