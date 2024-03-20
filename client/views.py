from .models import Client,Organizer
from rest_framework import viewsets
from .serializer import ClientSerializer,OrganizerSerializer
# Create your views here.


class ClientView(viewsets.ModelViewSet):
    serializer_class = ClientSerializer
    queryset = Client.objects.all()


class OrganizerView(viewsets.ModelViewSet):
    serializer_class = OrganizerSerializer
    queryset = Organizer.objects.all()