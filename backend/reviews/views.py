from django.contrib.auth import get_user_model
from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response
from restaurants.models import Restaurant
from reviews.models import Review
from reviews.serializers import ReviewSerializer


# POST -> create a review for a certain restaurant
class ReviewCreate(ListCreateAPIView):
    # /api/reviews/new/<int:restaurant_id>/ POST: Create new review for a restaurant.

    User = get_user_model()

    serializer_class = ReviewSerializer
    queryset = Restaurant.objects.all()
    lookup_url_kwarg = 'restaurant_id'

    def create(self, request, *args, **kwargs):
        restaurant = self.get_object()
        review = Review(creator=request.user, restaurant=restaurant, text_content=request.data['text_content'])
        review.save()
        return Response(self.get_serializer(instance=review).data)

# /api/reviews/restaurant/<int:restaurant_id>/ GET: Get the list of the reviews for a single restaurant.

# /api/reviews/user/<int:user_id>/ GET: Get the list of the reviews by a single user.
