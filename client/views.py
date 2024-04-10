from .models import Client,Organizer,Category
from rest_framework import viewsets
from .serializer import ClientSerializer,OrganizerSerializer,CategorySerializer
# Create your views here.


class ClientView(viewsets.ModelViewSet):
    serializer_class = ClientSerializer
    queryset = Client.objects.all()


class OrganizerView(viewsets.ModelViewSet):
    serializer_class = OrganizerSerializer
    queryset = Organizer.objects.all()


class CategoryView(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()