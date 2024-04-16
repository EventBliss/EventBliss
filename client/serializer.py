from rest_framework import serializers

from .models import Category, Client,Organizer

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model= Client
        fields = '__all__'

class OrganizerSerializer(serializers.ModelSerializer):
    category_names = serializers.SerializerMethodField()
    class Meta:
        model = Organizer
        fields = ['id','name', 'email', 'phone', 'cover_letter', 'location', 'linkedin', 'instagram', 'other', 'profile_photo', 'curriculum', 'event_types','category_names', 'status', 'request_date']

    def get_category_names(self, instance):
        return [category.name for category in instance.event_types.all()]


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields= '__all__'