from django.template import context
from .serializers import ReservationSerializer
from rest_framework import generics, mixins, status, viewsets
from rest_framework.response import Response 

class ReservationView(viewsets.GenericViewSet):

    serializer_class = ReservationSerializer

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