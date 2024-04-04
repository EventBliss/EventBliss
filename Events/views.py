from .models import Events,EventRequest
from rest_framework import viewsets
from .serializer import EventsSerializer,EventRequestSerializer
# Create your views here.

class EventsView(viewsets.ModelViewSet):
    serializer_class = EventsSerializer
    queryset = Events.objects.all()



class EventRequestView(viewsets.ModelViewSet):
    serializer_class = EventRequestSerializer
    queryset = EventRequest.objects.all()