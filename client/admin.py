from django.contrib import admin
from .models import Client,Organizer, Category
# Register your models here.
admin.site.register(Category)
admin.site.register(Client)
admin.site.register(Organizer)
