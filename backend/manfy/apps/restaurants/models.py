from django.db import models

class Restaurant (models.Model):
    slug = models.SlugField(max_length=100,unique=True)
    address = models.TextField()
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Table (models.Model):
    restaurant = models.ForeignKey('restaurants.Restaurant' , related_name='tables' , on_delete=models.CASCADE)
    capacity = models.IntegerField()
    sector = models.CharField(max_length=255)

    def __str__(self):
        return str(self.id)

class Img (models.Model):
    url = models.TextField(max_length=255)
    
    def __str__(self):
        return str(self.id)