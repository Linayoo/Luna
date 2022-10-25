from django.contrib import admin
<<<<<<< HEAD
from django.urls import path
from rest_framework_simplejwt import views

urlpatterns = [
    path("backend/admin/", admin.site.urls),

    # JWT
    path('backend/token/', views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('backend/token/refresh/', views.TokenRefreshView.as_view(), name='token_refresh'),
    path('backend/token/verify/', views.TokenVerifyView.as_view(), name='token_verify'),
=======
from django.urls import path, include

urlpatterns = [
    path("backend/api/admin/", admin.site.urls),
    path("backend/api/restaurants/", include('restaurants.urls'))
>>>>>>> fda5cf91575d0b6d7e28e40c691cdb6d65344fff
]
