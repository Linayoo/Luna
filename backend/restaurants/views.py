from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from restaurants.models import Restaurant
from restaurants.permissions import IsObjectOwnerOrAdmin
from restaurants.serializers import RestaurantSerializer


# /api/restaurants/
# GET: get a list of all restaurants
class RestaurantList(ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer


# /api/restaurants/new/
# POST: Create a new restaurant
class CreateNewRestaurant(CreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer


# /api/restaurants/<int:id>/
# GET: Get the details of a restaurant by providing the id of the restaurant
# PATCH: Update a restaurant by id (only by owner or restaurant admin)
# DELETE: Delete a restaurant by id (only by owner or restaurant admin)
class RestaurantDetailsUpdateDelete(RetrieveUpdateDestroyAPIView):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()
    permission_classes = [IsObjectOwnerOrAdmin]


# /api/restaurants/category/<int:category_id>/
# GET: Get the all the restaurants by category
class GetRestaurantsByCategory(ListAPIView):
    pass
