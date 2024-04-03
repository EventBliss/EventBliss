from rest_framework import serializers
from .models import Events



class EventsSerializer(serializers.ModelSerializer):
    organizer_name = serializers.CharField(source='organizer.name',read_only=True)
    category_names = serializers.SerializerMethodField()

    class Meta:
        model = Events
        fields = ['id','organizer_name','name', 'description','photos','category_names','location','amount_of_people','price','package']
        
    def get_category_names(self, instance):
        return [category.name for category in instance.category.all()]
