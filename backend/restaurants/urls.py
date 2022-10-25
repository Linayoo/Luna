from django.urls import path
from restaurants.views import RestaurantListCreate

urlpatterns = [
    path('', RestaurantListCreate.as_view()),
]
