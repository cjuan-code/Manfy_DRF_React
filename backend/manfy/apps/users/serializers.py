from tkinter import NO
from django.contrib.auth import authenticate
from rest_framework import serializers
from .models import (Incident,User)

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('password','email','first_name','last_name','role')

    def getUser(context):
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
        return {
            'user': {
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'full_name': user.fullname,
                'n_incidents': user.n_incidents,
                'n_coupons': user.n_coupons,
                'is_active': user.is_active,
                'role':user.role
            },
            'token': user.token,
        }
    def update(context):
        CurrentUser = context['user']
        NewEmail = context['email']
        NewPassword = context['password']
        NewName = context['name']
        NewSurname = context['surname']
        if CurrentUser is None:
            raise serializers.ValidationError(
                'User is not find'
            )
        user = User.objects.get(email=CurrentUser)

        if not user.is_active:
            raise serializers.ValidationError(
                'This user has been deactivated.'
            )

        User.objects.filter(email=CurrentUser).update(
            first_name = NewName,
            last_name = NewSurname,
            email = NewEmail,
            password = NewPassword
        )
        user = User.objects.get(email=CurrentUser)
        return{
            'user': {
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'full_name': user.fullname,
                'n_incidents': user.n_incidents,
                'n_coupons': user.n_coupons,
                'is_active': user.is_active,
                'role':user.role,
                'types':user.types
            },
            'token': user.token,
        }
    def register(context):

        email = context['email']
        password = context['password']
        first_name = context['first_name']
        last_name = context['last_name']

        try:
            user = User.objects.get(email = email)

            raise serializers.ValidationError(
                'User with this email already exists.'
            )

        except User.DoesNotExist:
            
            user = User.objects.create(
                email = email, 
                password = password, 
                first_name = first_name, 
                last_name = last_name,
                n_incidents = 0,
                n_coupons = 0,
                is_active = True
            )
            
        return {
            'user': {
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'full_name': user.fullname,
                'n_incidents': user.n_incidents,
                'n_coupons': user.n_coupons,
                'is_active': user.is_active,
                'role':user.role,
                'types':user.types
            },
            'token': user.token,
        }

    def login(data,context):
        email = data.get('email', None)
        password = context['password']
        if email is None:
            raise serializers.ValidationError(
                'An email address is required to log in.'
            )

        if password is None:
            raise serializers.ValidationError(
                'A password is required to log in.'
            )

        user = User.objects.get(email=email)
        
        if user is None:
            raise serializers.ValidationError(
                'User with this email and password was not found.'

            )

        if not user.is_active:
            raise serializers.ValidationError(
                'This user has been deactivated.'
            )

        return {
            'user': {
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'full_name': user.fullname,
                'n_incidents': user.n_incidents,
                'n_coupons': user.n_coupons,
                'is_active': user.is_active,
                'role':user.role,
                'types':user.types
            },
            'token': user.token
        }

        
class incidentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Incident
        fields = ('body','recipient','restaurant_id','user_id')

    def to_incident(instance):
        return{
            'id': instance.id,
            'created_at':instance.created_at,
            'body':instance.body,
            'recipient':instance.recipient,
            'restaurant_id':instance.restaurant_id,
            'user_id':instance.user_id,
            'first_name':instance.first_name,
            'last_name':instance.last_name
        }
    def to_incidentRestaurant(instance):
        return{
            'id': instance.id,
            'created_at':instance.created_at,
            'body':instance.body,
            'recipient':instance.recipient,
            'restaurant_id':instance.restaurant_id,
            'user_id':instance.user_id,
            'name':instance.name
        }
    
    def create(self,validate_data):
        restaurant_id = self.context['restaurant_id']
        user_id = self.context['user_id']
        incident = Incident.objects.create(
            restaurant_id = restaurant_id , 
            user_id = user_id,
            **validate_data)
        return incident
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
        serialized_incidents = []
        if user.role == 'Usuario':
            incidents = Incident.objects.raw("Select i.*,r.name from users_incident i inner join restaurants_restaurant r on i.restaurant_id = r.id where i.user_id ="+str(user.id))
            for incident in incidents.iterator():
                fields = incidentSerializer.to_incidentRestaurant(incident)
                serialized_incidents.append(fields)
        else:
            incidents = Incident.objects.raw("Select i.*, u.first_name, u.last_name from users_incident i inner join users_user u on i.user_id = u.id where i.user_id = "+str(user.id))
            for incident in incidents.iterator():
                fields = incidentSerializer.to_incident(incident)
                serialized_incidents.append(fields)

        return serialized_incidents
