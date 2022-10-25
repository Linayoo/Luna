from django.contrib import admin
from django.urls import path
from rest_framework_simplejwt import views

urlpatterns = [
    path("backend/admin/", admin.site.urls),

    # JWT
    path('backend/token/', views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('backend/token/refresh/', views.TokenRefreshView.as_view(), name='token_refresh'),
    path('backend/token/verify/', views.TokenVerifyView.as_view(), name='token_verify'),
]
