# serializers.py
from rest_framework.serializers import ModelSerializer
from .models import BackgroundImage, UserProfile, Post

class UserProfileSerializer(ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['user_id', 'username', 'email']

class PostSerializer(ModelSerializer):
    user = UserProfileSerializer()

    class Meta:
        model = Post
        fields = ['content', 'background_image', 'likes', 'user']


class BackgroundImageSerializer(ModelSerializer):
    class Meta:
        model = BackgroundImage
        fields = ['background_image']

class PostSerializer(ModelSerializer):
    user = UserProfileSerializer()
    background_image = BackgroundImageSerializer()

    class Meta:
        model = Post
        fields = ('id', 'content', 'likes', 'user', 'background_image')