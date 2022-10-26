from django.urls import path
from reviews.views import ReviewCreate, CommentCreate, ReviewList

urlpatterns = [
    path('reviews/new/<int:restaurant_id>/', ReviewCreate.as_view()),
    path('reviews/restaurant/<int:restaurant_id>/', ReviewList.as_view()),
    path('review/comment/new/<int:review_id>/', CommentCreate.as_view()),
]

# REVIEW
# /api/reviews/new/<int:restaurant_id>/ POST: Create new review for a restaurant - WORKING.
# /api/reviews/restaurant/<int:restaurant_id>/ GET: Get the list of the reviews for a single restaurant - WORKING.
# /api/reviews/user/<int:user_id>/ GET: Get the list of the reviews by a single user.
# COMMENT
# /api/review/comment/new/<int: review_id>/ POST: Comment on the review - WORKING.
