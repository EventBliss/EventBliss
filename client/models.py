from django.db import models
# Create your models here.


class Client(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(unique=True)
    phone = models.IntegerField()
    first_login = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        # Verificar si ya existe un cliente con el mismo correo electrónico
        existing_client = Client.objects.filter(email=self.email).first()
        if existing_client:
            return

        super(Client, self).save(*args, **kwargs)
    
    class Meta:
        verbose_name = 'Client'
        verbose_name_plural = 'Clients'

class Organizer(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(unique=True)
    phone = models.IntegerField()
    first_login = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        # Verificar si ya existe un cliente con el mismo correo electrónico
        existing_client = Organizer.objects.filter(email=self.email).first()
        if existing_client:
            return
    
    class Meta:
        verbose_name = 'Organizer'
        verbose_name_plural = 'Organizers'



