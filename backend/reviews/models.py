from django.contrib.auth import get_user_model
from django.core import validators
from django.db import models
from restaurants.models import Restaurant

User = get_user_model()


class Review(models.Model):
    creator = models.ForeignKey(User, related_name='reviews', on_delete=models.CASCADE)
    text_content = models.TextField()
    rating = models.IntegerField(validators=[validators.MinValueValidator(1), validators.MaxValueValidator(5)])
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    restaurant = models.ForeignKey(to=Restaurant, related_name='reviews', on_delete=models.CASCADE)
    liked_by = models.ManyToManyField(to=User, related_name='liked_reviews')


class Comment(models.Model):
    commented_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comments')
    commented_on = models.ForeignKey(Review, on_delete=models.CASCADE, related_name='review_comments')
    text_content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    liked_by = models.ManyToManyField(to=User, related_name='liked_comments')
