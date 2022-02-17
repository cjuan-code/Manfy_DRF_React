from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from .models import Reservation, Notification, User

class ReservationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reservation
        fields = ('restaurant_id', 'table_id', 'hour', 'day')

    def create(self, validate_data):
        user_email = self.context['user_email']
        restaurant_id = self.context['restaurant_id']
        table_id = self.context['table_id']

        user = User.objects.get(email=user_email)

        if not user.is_active:
            raise serializers.ValidationError(
                'This user has been deactivated.'
            )

        reservation = Reservation.objects.create(
            user_id = user.id,
            restaurant_id = restaurant_id,
            table_id = table_id,
            **validate_data
        )

        return reservation