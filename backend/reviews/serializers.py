from rest_framework import serializers
from reviews.models import Review, Comment


# from users.serializers import UserSerializer (for a nested user serializer)


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

    """
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['author'] = UserSerializer(instance.author).data
        representation['is_favorite'] = UserSerializer(instance.is_favorite).data
        return representation
    """
