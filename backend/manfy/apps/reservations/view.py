from django.template import context
from .serializers import ReservationSerializer
from rest_framework.exceptions import NotFound
from rest_framework import generics, mixins, status, viewsets
from rest_framework.response import Response 
from .models import Reservation

class ReservationView(mixins.DestroyModelMixin,viewsets.GenericViewSet):

    serializer_class = ReservationSerializer

    def create(self, request):
        serializer_context = {
            'user_email': request.user,
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
        return Response(None, status=status.HTTP_204_NO_CONTENT)
    
    def read(self,request):
        serializer_context={
            'user':request.user
        }
        serializer = ReservationSerializer.read(context=serializer_context)
        return Response(serializer,content_type="application/json")