# Generated by Django 5.0.1 on 2024-04-08 17:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('client', '0004_category_rename_first_login_organizer_request_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='organizer',
            name='cover_letter',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='organizer',
            name='curriculum',
            field=models.FileField(upload_to='Curriculums'),
        ),
        migrations.AlterField(
            model_name='organizer',
            name='github',
            field=models.URLField(),
        ),
        migrations.AlterField(
            model_name='organizer',
            name='linkedin',
            field=models.URLField(),
        ),
        migrations.AlterField(
            model_name='organizer',
            name='location',
            field=models.TextField(max_length=500),
        ),
        migrations.AlterField(
            model_name='organizer',
            name='other',
            field=models.URLField(),
        ),
        migrations.AlterField(
            model_name='organizer',
            name='profile_photo',
            field=models.ImageField(upload_to='ProfilePhotos'),
        ),
        migrations.AlterField(
            model_name='organizer',
            name='status',
            field=models.CharField(choices=[('In Progress', 'IP'), ('Approved', 'A')], default='In Progress', max_length=15),
        ),
    ]
