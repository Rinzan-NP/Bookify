from django.urls import path
from .views import ProfileView


urlpatterns = [
    path("get/user/", ProfileView.as_view(), name="get_user"),
]
