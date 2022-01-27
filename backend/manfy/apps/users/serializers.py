from rest_framework import serializers
from .models import Incident

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