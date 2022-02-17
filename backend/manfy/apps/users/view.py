from .models import (User,Incident)
from .serializers import incidentSerializer, userSerializer
from django.core import serializers
from rest_framework.exceptions import NotFound
from rest_framework.response import Response 
from rest_framework import generics, mixins, status, viewsets
from rest_framework.permissions import (AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser,)

class IncidentView(viewsets.GenericViewSet):
    serializer_class = incidentSerializer
    def create(self,request):
        print("*******************************")
        print(request.data['body'])
        if request.data['restaurant_id']:
            serializer_context = {
                'restaurant_id':request.data['restaurant_id'],
                'user':request.user,
                'body':request.data['body'],
                'recipient':request.data['destinatario'],
                'type':'User',
                'request': request
            } 
        else:
            serializer_context = {
                'user':request.user,
                'user_id':request.data['user_id'],
                'body':request.data['body'],
                'recipient':request.data['destinatario'],
                'type':'Restaurante',
                'request': request
            } 
        # serializer_data = request.data
        serializer = incidentSerializer.create(context=serializer_context)
        # serializer.is_valid(raise_exception=True)
        # serializer.save()
        
        return Response(serializer, status=status.HTTP_201_CREATED)  
    def getIncident(self,request):
        serializer_context={
            'user':request.user
        }
        serializer = incidentSerializer.read(context=serializer_context)
        return Response(serializer,content_type="application/json")


class UserInfo(viewsets.GenericViewSet):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    def getUser(self,request):
        current_user = request.user
        serializer_context = {
            'user': current_user
        }
        serializer = userSerializer.getUser(context = serializer_context)
        return Response(serializer, content_type="application/json")
    def update(self,request):
        current_user = request.user
        serializer_context = {
            'user': current_user,
            'email':request.data['email'],
            'password':request.data['password'],
            'name':request.data['first_name'],
            'surname':request.data['last_name'],
        }
        serializer = userSerializer.update(context = serializer_context)
        return Response(serializer,content_type="application/json")

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

        email = request.data['email']
        password = request.data['password']
        first_name = request.data['first_name']
        last_name = request.data['last_name']

        if email is None:
            raise NotFound("Email is required!")

        if password is None:
            raise NotFound("Password is required!")

        if first_name is None:
            raise NotFound("First Name is required!")

        if last_name is None: 
            raise NotFound("Last Name is required!")

        serializer_context = {
            'email': email,
            'password': password,
            'first_name': first_name,
            'last_name': last_name
        }

        serializer = userSerializer.register(serializer_context)

        return Response(serializer, status=status.HTTP_200_OK)

  