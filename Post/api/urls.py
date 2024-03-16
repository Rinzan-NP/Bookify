from django.urls import path
from .views import PostCreateView,PostListView


urlpatterns = [
    path('posts/', PostCreateView.as_view(), name="add_post"),
    path('get/posts/',PostListView.as_view(), name="get_posts"),
  
]
