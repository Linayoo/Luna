from django.urls import path
from users.views import GetUserProfile, ListAllUsers

urlpatterns = [
    path("api/me/", GetUserProfile.as_view()),
    path("api/users/list/", ListAllUsers.as_view()),
]