# Generated by Django 5.0.1 on 2024-04-16 02:31

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Events', '0002_customevents'),
    ]

    operations = [
        migrations.RenameField(
            model_name='customevents',
            old_name='name',
            new_name='company_organization',
        ),
        migrations.AddField(
            model_name='customevents',
            name='amount_people',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AddField(
            model_name='customevents',
            name='contact_email',
            field=models.EmailField(default=django.utils.timezone.now, max_length=254),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='customevents',
            name='event_name',
            field=models.CharField(default=django.utils.timezone.now, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='customevents',
            name='phone',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='customevents',
            name='status',
            field=models.CharField(choices=[('In progress', 'IP'), ('Approved', 'A'), ('Finished', 'F'), ('Denied', 'D')], default='In progress', max_length=15),
        ),
    ]
