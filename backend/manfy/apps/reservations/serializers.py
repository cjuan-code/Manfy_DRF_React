from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from .models import Reservation, Notification, User

class ReservationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reservation
        fields = ('restaurant_id', 'table_id', 'hour', 'day')

    def to_Reservation(instance):
        return{
            "id":instance.id,
            "hour":instance.hour,
            "day":instance.day,
            "restaurant_id":instance.restaurant_id,
            "table_id":instance.table_id,
            "user_id":instance.user_id,
            "name":instance.name
        }
    def to_reservationRestaurant(instance):
        return {
            "id":instance.id,
            "hour":instance.hour,
            "day":instance.day,
            "restaurant_id":instance.restaurant_id,
            "table_id":instance.table_id,
            "user_id":instance.user_id,
            "first_name":instance.first_name,
            "last_name":instance.last_name
        }
        
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
    def read(context):
        user = context['user']
        if user is None:
            raise serializers.ValidationError(
                'User is not find'
            )
        user = User.objects.get(email=user)
        if not user.is_active:
            raise serializers.ValidationError(
                'This user has been deactivated.'
            )
        serialized_reservation = []
        if(user.role == 'Usuario'):
            reservation = Reservation.objects.raw("SELECT r.*,res.name from reservations_reservation r inner join restaurants_restaurant res on res.id = r.restaurant_id where r.restaurant_id IN (Select r2.restaurant_id from reservations_reservation r2 where r2.user_id ='"+str(user.id)+"')")
            for reserva in reservation.iterator():
                fields = ReservationSerializer.to_Reservation(reserva)
                serialized_reservation.append(fields)
        else:
            reservation = Reservation.objects.raw("SELECT r.*,u.first_name, u.last_name from reservations_reservation r inner join users_user u on r.user_id = u.id  where r.restaurant_id = "+str(user.restaurant_id))
            for reserva in reservation.iterator():
                fields = ReservationSerializer.to_reservationRestaurant(reserva)
                serialized_reservation.append(fields)
                
        return serialized_reservation 

