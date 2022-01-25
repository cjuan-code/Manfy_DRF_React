from tkinter import CASCADE
from django.db import models
from manfy.apps.core.models import TimestampedModel
from manfy.apps.users.models import User
from manfy.apps.restaurants.models import Restaurant, Table

class Reservation(TimestampedModel):

    user = models.ForeignKey('users.User', on_delete=models.DO_NOTHING)
    restaurant = models.ForeignKey('restaurants.Restaurant', on_delete=models.DO_NOTHING)
    table = models.ForeignKey('restaurants.Table', on_delete=models.DO_NOTHING)
    hour = models.CharField('hour', max_length=10)
    day = models.CharField('day', max_length=10)

    def __str__(self):
        return str(self.id)

class Notification(TimestampedModel):
    user = models.ForeignKey('users.User', on_delete=models.CASCADE)
    reservation = models.ForeignKey('Reservation', on_delete=models.CASCADE)
    estimated_hour = models.TextField()

    REQUIRED_FIELDS = ['user', 'reservation', 'estimated_hour']

    def __str__(self):
        return str(self.id)
