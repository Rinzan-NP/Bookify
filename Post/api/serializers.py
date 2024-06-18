# serializers.py
from rest_framework.serializers import ModelSerializer
from .models import BackgroundImage, UserProfile, Post
from rest_framework import serializers


class UserProfileSerializer(ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ["user_id", "username", "email"]


class BackgroundImageSerializer(ModelSerializer):
    class Meta:
        model = BackgroundImage
        fields = ["background_image"]


class PostSerializer(ModelSerializer):
    user = UserProfileSerializer()
    background_image = BackgroundImageSerializer()

    class Meta:
        model = Post
        fields = ["content", "background_image", "likes", "user"]


# PROFILE


class ProfileUserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ["user_id", "username", "email"]


class ProfileBackgroundImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = BackgroundImage
        fields = ["background_image"]


class ProfilePostSerializer(serializers.ModelSerializer):
    background_image = ProfileBackgroundImageSerializer()

    class Meta:
        model = Post
        fields = ["id", "content", "background_image", "created_at"]
