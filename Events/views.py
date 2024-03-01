from django.shortcuts import render
from .models import Events
from rest_framework import viewsets
from .serializer import EventsSerializer
# Create your views here.

class EventsView(viewsets.ModelViewSet):
    serializer_class = EventsSerializer
    queryset = Events.objects.all()