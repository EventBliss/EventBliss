from rest_framework import serializers

from .models import Category, Client,Organizer

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model= Client
        fields = '__all__'

class OrganizerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organizer
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields= '__all__'