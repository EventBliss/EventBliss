from django.contrib import admin
from .models import Events,Category,EventRequest
# Register your models here.

class EventRequestsAdmin(admin.ModelAdmin):
    readonly_fields = ('created','updated')


admin.site.register(Category)
admin.site.register(Events)
admin.site.register(EventRequest,EventRequestsAdmin)