from django.contrib import admin
from .models import User, Incident

admin.site.register(User)
admin.site.register(Incident)