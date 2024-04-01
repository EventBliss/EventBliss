from django.contrib import admin
from .models import Events,Category,EventRequest
# Register your models here.


admin.site.register(Events)
admin.site.register(Category)
admin.site.register(EventRequest)