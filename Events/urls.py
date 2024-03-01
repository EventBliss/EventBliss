from django.urls import path,include
from rest_framework import routers
from .views import EventsView

router = routers.DefaultRouter()
router.register(r'events',EventsView,'event')

urlpatterns = [
    path('v1/',include(router.urls))
]