from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

class Client(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(unique=True)
    phone = models.IntegerField(blank=True)
    first_login = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = 'Client'
        verbose_name_plural = 'Clients'

class Organizer(models.Model):

    STATUS_CHOICE =(
        ('In Progress', 'IP'),
        ('Approved', 'A'),
    )

    name = models.CharField(max_length=200)
    email = models.EmailField(unique=True)
    phone = models.IntegerField(blank=True)
    cover_letter = models.TextField()
    location = models.TextField(max_length=500)
    linkedin = models.URLField(blank=True)
    instagram = models.URLField(blank=True)
    other = models.URLField(blank=True)
    profile_photo = models.ImageField(upload_to='ProfilePhotos')
    curriculum = models.FileField(upload_to='Curriculums')
    event_types = models.ManyToManyField(Category)
    status = models.CharField(max_length=15,choices=STATUS_CHOICE,default='In Progress')
    request_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
        

    class Meta:
        verbose_name = 'Organizer'
        verbose_name_plural = 'Organizers'



