from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("backend/api/admin/", admin.site.urls),
    path("backend/api/restaurants/", include('restaurants.urls'))
]
