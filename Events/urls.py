from django.urls import path,include
from rest_framework import routers
from .views import EventsView,EventRequestView

router = routers.DefaultRouter()
router.register(r'events',EventsView,'event')
router.register(r'eventRequest',EventRequestView,'eventrequest')

urlpatterns = [
    path('v1/',include(router.urls))
]