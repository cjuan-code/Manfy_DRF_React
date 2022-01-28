from django.apps import AppConfig

class UsersAppConfig(AppConfig):
    name = 'manfy.apps.users'
    label = 'users'
    verbose_name = 'Users'
    
    def ready(self):
        import manfy.apps.users.signals

default_app_config = 'manfy.apps.users.UsersAppConfig'