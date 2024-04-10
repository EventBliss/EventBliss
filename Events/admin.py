from django.contrib import admin
from .models import Events,EventRequest
# Register your models here.

class EventRequestsAdmin(admin.ModelAdmin):
    readonly_fields = ('created','updated')



admin.site.register(Events)
admin.site.register(EventRequest,EventRequestsAdmin)