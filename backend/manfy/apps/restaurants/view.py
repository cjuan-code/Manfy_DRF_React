from .models import Restaurant,Table,Img
from rest_framework.response import Response
from rest_framework import generics, mixins, status, viewsets
from .serializers import (restaurantSerializer, imgSerializer, TableSerializer)
from rest_framework.permissions import (AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser,)


class TableView(viewsets.GenericViewSet):

    def getTablesByRestaurant(self, request):
        serializer_context = {
            'restaurant_id': request.data['restaurant_id']
        }

        serializer = TableSerializer.getTablesByRestaurant(context=serializer_context)

        return Response(serializer, status=status.HTTP_200_OK)

        
    def GetFreeTablesByRestaurant(self, request):
        serializer_context = {
            'hour': request.data['hour'],
            'day': request.data['day'],
            'restaurant_id': request.data['restaurant_id']
        }

        serializer = TableSerializer.GetFreeTablesByRestaurant(context=serializer_context)

        return Response(serializer, status=status.HTTP_200_OK)

class RestaurantView(viewsets.GenericViewSet):

    def getRestaurant(self, request):
        serializer_context = {
            'restaurant_id': request.data['restaurant_id']
        }

        serializer = restaurantSerializer.getRestaurant(context = serializer_context)

        return Response(serializer, status=status.HTTP_200_OK)

class GetRestaurants(generics.ListAPIView):
    permission_classes = (AllowAny,)
    queryset = Restaurant.objects.all()
    serializer_class = restaurantSerializer

class GetImages(generics.ListAPIView):
    permission_classes = (AllowAny,)
    queryset = Img.objects.all()
    serializer_class = imgSerializer

