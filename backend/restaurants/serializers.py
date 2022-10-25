from rest_framework import serializers
from restaurants.models import Restaurant


# from users.serializers import UserSerializer (nested user serializer)


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'

    """
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['author'] = UserSerializer(instance.author).data
        representation['is_favorite'] = UserSerializer(instance.is_favorite).data
        return representation
    """