from django.template import context
from .serializers import ReservationSerializer,NotifySerializer
from rest_framework.exceptions import NotFound
from rest_framework import generics, mixins, status, viewsets
from rest_framework.response import Response 
from .models import Reservation
from rest_framework.permissions import (AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser,)

class NotifyView(viewsets.GenericViewSet):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    def countNotify(self,request):
        user = request.user
        serializer_context = {
            'user':user
        }

        serializer = NotifySerializer.countNotify(context=serializer_context) 
        return Response(serializer,status=status.HTTP_201_CREATED)

class ReservationView(mixins.DestroyModelMixin,viewsets.GenericViewSet):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = ReservationSerializer
    def getUserReservation(self,request):
        serializer_context = {
            'user': request.user 
        }
        serializer = ReservationSerializer.getUserReservation(context=serializer_context)
        return Response(serializer,status=status.HTTP_201_CREATED)

    def create(self, request):
        serializer_context = {
            'user_id': request.data['user_id'],
            'restaurant_id': request.data['restaurant_id'],
            'table_id': request.data['table_id'],
            'request': request
        }
        
        serializer_data = request.data

        serializer = self.serializer_class(
            data = serializer_data,
            context = serializer_context
        )

        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    def delete(request,*args,**kwargs):
        id = kwargs['id']
        reservation = Reservation.objects.get(id=id)
        try:
            reservation = Reservation.objects.get(id=id)
        except Reservation.DoesNotExist:
            raise NotFound('A article with this id does not exist.')
        reservation.delete()
        data = {
            "response":"Eliminado Correctamente"
        }
        return Response(data, status=status.HTTP_201_CREATED)
    
    def read(self,request):
        serializer_context={
            'user':request.user
        }
        serializer = ReservationSerializer.read(context=serializer_context)
        return Response(serializer,content_type="application/json")