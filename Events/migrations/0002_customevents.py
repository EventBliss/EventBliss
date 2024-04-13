# Generated by Django 5.0.1 on 2024-04-11 17:09

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Events', '0001_initial'),
        ('client', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomEvents',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('start_date', models.DateTimeField()),
                ('ending_time', models.DateTimeField()),
                ('location', models.CharField(max_length=200)),
                ('comment', models.TextField()),
                ('estimated_price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('client', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='client.client')),
                ('event_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='client.category')),
                ('organizer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='client.organizer')),
            ],
            options={
                'verbose_name': 'CustomEvent',
                'verbose_name_plural': 'CustomEvents',
            },
        ),
    ]