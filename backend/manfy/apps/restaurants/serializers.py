from dataclasses import field
from pyexpat import model
from rest_framework import serializers
from .models import Restaurant,Table,Img

class imgSerializer(serializers.ModelSerializer):
    class Meta:
        model = Img
        fields = ('id','url')

class tableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Table
        fields = ('id','capacity','sector','id_restaurant_id')

    def to_img(self,instance) :
        return {
            'id': instance.id,
            'url': instance.url
        }

class tableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Table
        fields = ('id','capacity','sector','restaurant_id')

        def to_tables(self,instance):
            return{
                'id': instance.id,
                'capacity': instance.capacity,
                'sector': instance.sector,
                'restaurant_id': instance.restaurant_id
            }

class restaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ('id','slug','address','name')

    def to_restaurant(self,instance):
        return {
            'id' : instance.id,
            'slug' : instance.slug,
            'adress' : instance.adress,
            'name' : instance.name
        }
        