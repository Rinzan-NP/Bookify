from django.urls import path
from .views import PostCreateView, PostListView, ProfilePostView


urlpatterns = [
    path("posts/", PostCreateView.as_view(), name="add_post"),
    path("get/posts/", PostListView.as_view(), name="get_posts"),
    path("get/userposts/<email>", ProfilePostView.as_view(), name="get_userposts"),
]
