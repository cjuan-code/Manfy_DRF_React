# Generated by Django 4.0.1 on 2022-01-21 16:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='table',
            old_name='id_restaurant',
            new_name='restaurant',
        ),
        migrations.RemoveField(
            model_name='restaurant',
            name='ntables',
        ),
    ]
