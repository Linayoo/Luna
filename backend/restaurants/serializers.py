from rest_framework import serializers
from restaurants.models import Restaurant


# from users.serializers import UserSerializer (nested user serializer)


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'
