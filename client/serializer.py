from rest_framework import serializers

from .models import Client,Organizer

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model= Client
        fields = '__all__'

class OrganizerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organizer
        fields = '__all__'