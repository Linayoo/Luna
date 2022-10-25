from rest_framework.generics import RetrieveUpdateAPIView, ListAPIView, RetrieveAPIView, get_object_or_404
from rest_framework.permissions import IsAdminUser

from users.models import User
from users.serializers import UserSerializer


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
class SearchUser(RetrieveAPIView):
    pass


# /api/users/<int:user_id>/
# GET: get a specific user profile
class GetSpecificUser(RetrieveAPIView):
    pass