from django.contrib.auth import authenticate
from rest_framework import serializers
from .models import (Incident,User)

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('password','email','first_name','last_name')

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
                'is_active': user.is_active
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
                'is_active': user.is_active
            },
            'token': user.token
        }
        
class incidentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Incident
        fields = ('body','recipient','restaurant_id','user_id')
    
    def create(self,validate_data):
        restaurant_id = self.context['restaurant_id']
        user_id = self.context['user_id']
        incident = Incident.objects.create(
            restaurant_id = restaurant_id , 
            user_id = user_id,
            **validate_data)
        return incident