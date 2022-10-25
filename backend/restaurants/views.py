from rest_framework.generics import ListCreateAPIView
from restaurants.models import Restaurant
from restaurants.serializers import RestaurantSerializer


# GET a list of all restaurants/ POST create a new Restaurant
class RestaurantListCreate(ListCreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
