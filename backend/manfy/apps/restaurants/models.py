from django.db import models
from manfy.apps.core.models import TimestampedModel

class Restaurant (TimestampedModel, models.Model):
    slug = models.SlugField(max_length=100,unique=True, editable=False)
    address = models.TextField()
    name = models.CharField(max_length=255)

    def __str__(self):
        return str(self.id)

class Table (TimestampedModel, models.Model):
    restaurant = models.ForeignKey('restaurants.Restaurant' , related_name='tables' , on_delete=models.CASCADE)
    capacity = models.IntegerField()
    sector = models.CharField(max_length=255)

    def __str__(self):
        return str(self.id)

class Img (models.Model):
    url = models.TextField(max_length=255)
    
    def __str__(self):
        return str(self.id)