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
    price = models.DecimalField(max_digits=8, decimal_places=2)
    package = models.BooleanField(default=False)
    organizer = models.ForeignKey(Organizer,on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = 'Event'
        verbose_name_plural = 'Events'

class EventRequest(models.Model):
    STATUS_CHOICES =(
        ('In progress','IP'),
        ('Approved','A'),
        ('Finished','F'),
        ('Denied','D')
    )
    client = models.ForeignKey(Client,on_delete= models.CASCADE)
    organizer = models.ForeignKey(Organizer,on_delete=models.CASCADE)
    event = models.ForeignKey(Events,on_delete= models.CASCADE)
    event_date = models.DateField()
    event_location = models.CharField(max_length=300)
    status = models.CharField(max_length=15,choices=STATUS_CHOICES, default='In progress')
    comment = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.client.name
    
    class Meta:
        verbose_name = 'EventRequest'
        verbose_name_plural = 'EventRequests'