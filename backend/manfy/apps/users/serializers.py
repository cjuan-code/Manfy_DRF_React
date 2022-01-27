from django.contrib.auth import authenticate
from rest_framework import serializers
from .models import (Incident,User)

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('password','email','first_name','last_name')

    def register(self,validate_data):
        user = User.objects.create(**validate_data)
        return user

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
                'A user with this email and password was not found.'
            )

        if not user.is_active:
            raise serializers.ValidationError(
                'This user has been deactivated.'
            )

        return {
            'email': user.email,
            'FullName': user.fullname,
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