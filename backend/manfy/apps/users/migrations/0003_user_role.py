# Generated by Django 4.0.1 on 2022-02-15 17:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_alter_incident_restaurant_alter_incident_user_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='role',
            field=models.CharField(blank=True, max_length=15, verbose_name='role'),
        ),
    ]
