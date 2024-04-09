from rest_framework import serializers
from client.models import Category
from .models import EventRequest, Events



class EventsSerializer(serializers.ModelSerializer):
    organizer_name = serializers.CharField(source='organizer.name',read_only=True)
    organizer_email = serializers.CharField(source='organizer.email',read_only=True)
    category_names = serializers.SerializerMethodField()


    class Meta:
        model = Events
        fields = ['id','organizer','organizer_name','organizer_email','name', 'description','image','category_names','category','price','package','created']
        
    def get_category_names(self, instance):
        return [category.name for category in instance.category.all()]



class EventRequestSerializer(serializers.ModelSerializer):
    organizer_email = serializers.CharField(source='organizer.email',read_only=True,required=False)
    organizer_name = serializers.CharField(source='organizer.name',read_only=True,required=False)
    client_name = serializers.CharField(source='client.name',read_only=True,required=False)
    event_name = serializers.CharField(source='event.name',read_only=True,required=False)
    class Meta:
        model = EventRequest
        fields= ['id','client','client_name','organizer','organizer_name','organizer_email','event','event_name','event_location','status','event_date','comment','created']
