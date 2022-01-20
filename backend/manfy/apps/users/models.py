from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser
from manfy.apps.core.models import TimestampedModel

class User(AbstractBaseUser, TimestampedModel):
    email = models.EmailField('email', unique=True)
    first_name = models.CharField('first_name', max_length=30, blank=True)
    last_name = models.CharField('last_name', max_length=30, blank=True)
    n_incidents = models.DecimalField('n_incidents', max_digits=10, decimal_places=0, default=0)
    n_coupons = models.DecimalField('n_coupons', max_digits=10, decimal_places=0, default=0)
    is_active = models.BooleanField('active', default=True)

    # objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['email', 'first_name', 'last_name', 'n_incidents', 'n_coupons', 'active']

    class Meta:
        verbose_name = 'user'
        verbose_name_plural = 'users'

    def get_full_name(self):
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
