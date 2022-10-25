import logging

from rest_framework import filters
from rest_framework.generics import RetrieveUpdateAPIView, ListAPIView, RetrieveAPIView, get_object_or_404
from rest_framework.permissions import IsAdminUser, IsAuthenticated

from users.models import User
from users.serializers import UserSerializer


logger = logging.getLogger('django')


# /api/me/
# GET: Get user profile
# PATCH: Update the user profile
class GetUserProfile(RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_queryset(self):
        queryset = User.objects.all()
        return queryset

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(queryset, id=self.request.user.id)
        return obj


# /api/users/list/
# GET: Get all users
class ListAllUsers(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdminUser]


# /api/users/?search=<str:search_string>/
# GET: Search for a user
class SearchUser(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['username']


# api/users/<int:pk>/
# GET: Get specific user profile
class GetUserSpecificProfile(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]