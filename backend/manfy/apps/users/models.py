from enum import unique
from django.db import models
import jwt
from datetime import datetime, timedelta
from django.conf import settings
from django.contrib.auth.base_user import AbstractBaseUser
from manfy.apps.core.models import TimestampedModel
from manfy.apps.restaurants.models import Restaurant

class User(AbstractBaseUser, TimestampedModel):
    uuid = models.CharField('uuid', max_length=36,unique=True, editable=False)
    email = models.EmailField('email', unique=True)
    first_name = models.CharField('first_name', max_length=30, blank=True)
    last_name = models.CharField('last_name', max_length=30, blank=True)
    n_incidents = models.IntegerField('n_incidents', default=0)
    n_coupons = models.IntegerField('n_coupons', default=0)
    is_active = models.BooleanField('active', default=True)

    # objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['email', 'first_name', 'last_name', 'n_incidents', 'n_coupons', 'active']

    class Meta:
        verbose_name = 'user'
        verbose_name_plural = 'users'

    @property
    def fullname(self):
        '''
        Returns the first_name plus the last_name, with a space in between.
        '''
        full_name = '%s %s' % (self.first_name, self.last_name)
        return full_name.strip()

    def get_short_name(self):
        '''
        Returns the short name for the user.
        '''
        return self.first_name
    
    @property
    def token(self):
        return self.generate_token_jwt()
    
    def generate_token_jwt(self):
        dt = datetime.now() + timedelta(minutes=60)

        token = jwt.encode({
            'email': self.email,
            'exp': int(dt.strftime('%s'))
        }, settings.SECRET_KEY, algorithm='HS256')

        return token.decode('utf-8')

class Incident(TimestampedModel):
    body = models.TextField('body', max_length=300, blank=True)
    user = models.ForeignKey(User, related_name="user_id", on_delete=models.CASCADE,null = True)
    restaurant = models.ForeignKey(Restaurant,related_name="restaurant_id", on_delete=models.CASCADE,null = True)
    recipient = models.TextField('recipient')

    def __str__(self):
        return str(self.id)
