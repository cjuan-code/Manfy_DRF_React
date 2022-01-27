from .models import (User,Incident)
from .serializers import incidentSerializer, userSerializer
from rest_framework.exceptions import NotFound
from rest_framework.response import Response 
from rest_framework import generics, mixins, status, viewsets
from rest_framework.permissions import (AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser,)

class IncidentView(viewsets.GenericViewSet):
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

class UserView(viewsets.GenericViewSet):
    permission_classes = (AllowAny,)
    serializer_class = userSerializer

    def login(self,request):
        email = request.data['email']
        password = request.data['password']
        serializer_context = {
            'password': password
        }
        if email is None:
            raise NotFound('Email is required!')

        if password is None:
            raise NotFound("Password is required!")

        user = request.data
        serializer = userSerializer.login(data=user,context = serializer_context)
        return Response(serializer, status=status.HTTP_200_OK)

    def register(self,request):
        print('register')  
