from django.urls import path
from reviews.views import ReviewCreate

urlpatterns = [
    path('new/<int:restaurant_id>/', ReviewCreate.as_view()),
]

# /api/reviews/new/<int:restaurant_id>/ POST: Create new review for a restaurant.
# /api/reviews/restaurant/<int:restaurant_id>/ GET: Get the list of the reviews for a single restaurant.
# /api/reviews/user/<int:user_id>/ GET: Get the list of the reviews by a single user.
