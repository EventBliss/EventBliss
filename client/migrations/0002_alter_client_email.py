# Generated by Django 5.0.1 on 2024-04-01 04:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('client', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='email',
            field=models.EmailField(max_length=254, unique=True),
        ),
    ]
