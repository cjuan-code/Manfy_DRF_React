from django.contrib import admin 
from .models import Reservation, Notification

admin.site.register(Reservation)
admin.site.register(Notification)