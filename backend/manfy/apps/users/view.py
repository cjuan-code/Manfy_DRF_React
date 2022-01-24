from .models import (User,Incident)
# from .serializers import 
from rest_framework import generics, mixins, status, viewsets
from rest_framework.permissions import (AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser,)

# class CreateIncident():
