from django.urls import path
from restaurants.views import RestaurantList, CreateNewRestaurant, RestaurantDetailsUpdateDelete

urlpatterns = [
    path('restaurants/', RestaurantList.as_view()),
    path('restaurants/new/', CreateNewRestaurant.as_view()),
    path('restaurants/<int:pk>/', RestaurantDetailsUpdateDelete.as_view())
]
