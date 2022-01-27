from .models import (User,Incident)
from .serializers import incidentSerializer
from rest_framework.response import Response 
from rest_framework import generics, mixins, status, viewsets
from rest_framework.permissions import (AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser,)

class CreateIncident(generics.ListCreateAPIView):
    # permission_classes = (IsAuthenticated)
    serializer_class = incidentSerializer
    def create(self,request):
        serializer_context = {
            'restaurant_id':request.data['restaurant_id'],
            'user_id':request.data['user_id'],
            'request': request
        }
        serializer_data = request.data
        serializer = self.serializer_class(
            data=serializer_data, context=serializer_context
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)

