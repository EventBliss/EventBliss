# Generated by Django 5.0.1 on 2024-04-17 04:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Events', '0004_eventrequest_ending_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='eventrequest',
            name='event_date',
            field=models.DateTimeField(),
        ),
    ]