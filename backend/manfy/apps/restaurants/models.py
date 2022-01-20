from django.db import models

class Restaurants (models.Model):
    slug = models.SlugField(max_length=100,unique=True)
    address = models.TextField()
    name = models.CharField(max_length=255)
    ntables = models.IntegerField()
    nincidents = models.IntegerField()

    def __str__(self):
        return self

class Tables (models.Model):
    restaurant = models.ForeignKey('restaurants.Restaurants' , related_name='tables' , on_delete=models.CASCADE)
    capacity = models.IntegerField()
    sector = models.CharField(max_length=255)

    def __str__(self):
        return self

class Img (models.Model):
    url = models.TextField(max_length=255)
    
    def __str__(self):
        return self