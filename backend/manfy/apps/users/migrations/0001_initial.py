# Generated by Django 4.0.1 on 2022-01-26 18:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('restaurants', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='email')),
                ('first_name', models.CharField(blank=True, max_length=30, verbose_name='first_name')),
                ('last_name', models.CharField(blank=True, max_length=30, verbose_name='last_name')),
                ('n_incidents', models.IntegerField(default=0, verbose_name='n_incidents')),
                ('n_coupons', models.IntegerField(default=0, verbose_name='n_coupons')),
                ('is_active', models.BooleanField(default=True, verbose_name='active')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
            },
        ),
        migrations.CreateModel(
            name='Incident',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('body', models.TextField(blank=True, max_length=300, verbose_name='body')),
                ('recipient', models.TextField(verbose_name='recipient')),
                ('restaurant', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='id_restaurant_id', to='restaurants.restaurant')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='id_user_id', to='users.user')),
            ],
            options={
                'ordering': ['-created_at', '-updated_at'],
                'abstract': False,
            },
        ),
    ]
