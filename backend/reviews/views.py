from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response
from restaurants.models import Restaurant
from reviews.models import Review, Comment
from reviews.serializers import ReviewSerializer, CommentSerializer


# POST -> create a review for a certain restaurant
class ReviewCreate(ListCreateAPIView):
    # /api/reviews/new/<int:restaurant_id>/ POST: Create new review for a restaurant.

    serializer_class = ReviewSerializer
    queryset = Restaurant.objects.all()
    lookup_url_kwarg = 'restaurant_id'

    def create(self, request, *args, **kwargs):
        restaurant = self.get_object()
        review = Review(creator=request.user, restaurant=restaurant, text_content=request.data['text_content'],
                        rating=request.data['rating'])
        review.save()
        return Response(self.get_serializer(instance=review).data)


# POST -> create a comment for a certain review
class CommentCreate(ListCreateAPIView):
    # /api/review/comment/new/< int: review_id >/ POST: Comment on the review.

    serializer_class = CommentSerializer
    queryset = Review.objects.all()
    lookup_url_kwarg = 'review_id'

    def create(self, request, *args, **kwargs):
        review = self.get_object()
        comment = Comment(commented_by=request.user, commented_on=review, text_content=request.data['text_content'])
        comment.save()
        return Response(self.get_serializer(instance=comment).data)