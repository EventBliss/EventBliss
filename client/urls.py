from django.urls import path,include
from rest_framework import routers
from .views import ClientView,OrganizerView

router = routers.DefaultRouter()
router.register(r'clients',ClientView,'client')

seconsRouter = routers.DefaultRouter()
seconsRouter.register(r'organizers',OrganizerView,'organizer')

urlpatterns = [
    path('v1/',include(router.urls)),
    path('v1/',include(seconsRouter.urls))
]