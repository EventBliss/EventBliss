# Generated by Django 5.0.1 on 2024-03-13 01:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Events', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='events',
            name='duration',
        ),
        migrations.RemoveField(
            model_name='events',
            name='start_time',
        ),
    ]