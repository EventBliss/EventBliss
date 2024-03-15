from typing import Any
from django.db import models
from client.models import Client, Organizer

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

class Events(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    photos = models.URLField(max_length= 3000)
    category = models.ManyToManyField(Category)
    location = models.CharField(max_length= 500,blank=True)
    amount_of_people = models.IntegerField(default=50)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    package = models.BooleanField(default=False)
    organizer = models.ForeignKey(Organizer,on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = 'Event'
        verbose_name_plural = 'Events'

class EventRequest(models.Model):
    client = models.ForeignKey(Client,on_delete= models.CASCADE)
    event = models.ForeignKey(Events,on_delete= models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    event_date = models.DateField()
    budget = models.IntegerField()
    location = models.TextField(max_length=500)
    guests = models.IntegerField()

    def __str__(self):
        return self.client
    
    class Meta:
        verbose_name = 'EventRequest'
        verbose_name_plural = 'EventRequests'