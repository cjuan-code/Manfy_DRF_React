from rest_framework import serializers
from .models import Incident

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