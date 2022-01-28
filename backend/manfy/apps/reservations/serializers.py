from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from .models import Reservation, Notification

class ReservationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reservation
        fields = ('user_id', 'restaurant_id', 'table_id', 'hour', 'day')

    def create(self, validate_data):
        user_id = self.context['user_id']
        restaurant_id = self.context['restaurant_id']
        table_id = self.context['table_id']

        reservation = Reservation.objects.create(
            user_id = user_id,
            restaurant_id = restaurant_id,
            table_id = table_id,
            **validate_data
        )

        return reservation