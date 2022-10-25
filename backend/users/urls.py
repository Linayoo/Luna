from django.urls import path
from users.views import GetUserProfile, ListAllUsers, SearchUser, GetUserSpecificProfile

urlpatterns = [
    path("api/me/", GetUserProfile.as_view()),
    path("api/users/list/", ListAllUsers.as_view()),
    path("api/users/", SearchUser.as_view()),  # in postman, "api/users/?search=<str:search_string>/"
    path("api/users/<int:pk>/", GetUserSpecificProfile.as_view())
]