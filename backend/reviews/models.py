from django.contrib.auth import get_user_model
from django.core import validators
from django.db import models

from backend.restaurants.models import Restaurant

User = get_user_model()


class Review(models.Model):
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    text_content = models.TextField()
    rating = models.IntegerField(validators=[validators.MinValueValidator(1), validators.MaxValueValidator(5)])
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    liked_by = models.OneToOneField(User, on_delete=models.CASCADE)


class Comment(models.Model):
    commented_by = models.ForeignKey(User, on_delete=models.CASCADE)
    commented_on = models.ForeignKey(Review, on_delete=models.CASCADE)
    text_content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    liked_by = models.OneToOneField(User, on_delete=models.CASCADE)
