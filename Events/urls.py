from django.urls import path,include
from rest_framework import routers
from .views import EventsView,EventRequestView,CustomEventView

router = routers.DefaultRouter()
router.register(r'events',EventsView,'event')
router.register(r'eventRequest',EventRequestView,'eventrequest')
router.register(r'customEvents',CustomEventView,'customEvent')


urlpatterns = [
    path('v1/',include(router.urls))
]
