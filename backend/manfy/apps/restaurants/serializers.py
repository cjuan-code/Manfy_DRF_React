from pyexpat import model
from rest_framework import serializers
from .models import Restaurant,Table,Img
import json
from django.core.serializers import serialize

class imgSerializer(serializers.ModelSerializer):
    class Meta:
        model = Img
        fields = ('id','url')

class TableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Table
        fields = ('id','capacity','sector','restaurant_id')

    def to_tables(instance):
        return {
            'id': instance.id,
            'capacity': instance.capacity,
            'sector': instance.sector,
            'restaurant_id': instance.restaurant_id
        }
    
    def getTablesByRestaurant(context):

        queryset = Table.objects.filter(restaurant_id = context['restaurant_id'])

        serialized_tables = []

        for table in queryset.iterator():
            ser_table = TableSerializer.to_tables(table)
            serialized_tables.append(ser_table)

        return serialized_tables

    def GetFreeTablesByRestaurant(context):

        queryset = Table.objects.raw("SELECT * FROM restaurants_table WHERE id NOT IN (SELECT r.table_id FROM reservations_reservation r WHERE r.hour = '" + context['hour'] + "' AND r.day ='" + context['day'] + "') AND restaurant_id = " + context['restaurant_id'])
            
        serialized_tables = []

        for table in queryset.iterator():
            ser_table = TableSerializer.to_tables(table)
            serialized_tables.append(ser_table)

        return serialized_tables


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
