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
        fields = ('id','body','recipient','id_restaurant_id','id_user_id')
    
    def create(self,validate_data):
        id_restaurant_id = self.context['id_restaurant_id']
        id_user_id = self.context['id_user_id']
        incident = Incident.objects.create(
            id_restaurant_id = id_restaurant_id , 
            id_user_id = id_user_id,
            **validate_data)
        return incident