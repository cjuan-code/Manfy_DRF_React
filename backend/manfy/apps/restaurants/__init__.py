from django.apps import AppConfig


class RestaurantsAppConfig(AppConfig):
    name = 'manfy.apps.restaurants'
    label = 'restaurants'
    verbose_name = 'Restaurants'
    
    def ready(self):
        import manfy.apps.restaurants.signals

default_app_config = 'manfy.apps.restaurants.RestaurantsAppConfig'