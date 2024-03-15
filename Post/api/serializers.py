# serializers.py
from rest_framework.serializers import ModelSerializer
from .models import UserProfile, Post

class UserProfileSerializer(ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['user_id', 'username', 'email']

class PostSerializer(ModelSerializer):
    user = UserProfileSerializer()

    class Meta:
        model = Post
        fields = ['content', 'background_image', 'likes', 'user']


