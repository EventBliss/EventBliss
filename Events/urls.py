from django.urls import path,include
from rest_framework import routers
from .views import EventsView,EventRequestView,CategorySerializer

router = routers.DefaultRouter()
router.register(r'events',EventsView,'event')
router.register(r'eventRequest',EventRequestView,'eventrequest')
router.register(r'categories',CategorySerializer)
urlpatterns = [
    path('v1/',include(router.urls))
]
