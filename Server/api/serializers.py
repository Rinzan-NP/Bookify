from rest_framework.serializers import ModelSerializer
from .models import BackgroundImage, Post, User
from rest_framework.exceptions import ValidationError
from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserRegisterSerializer(ModelSerializer):
    class Meta:

        model = User
        fields = [
            "id",
            "username",
            "email",
            "password",
        ]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        password = validated_data.pop("password", None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
            instance.save()
            return instance
        else:
            raise ValidationError({"password": "password is not valid"})
        
class ProfileSerializer(serializers.ModelSerializer):
    followers_count = serializers.SerializerMethodField()
    following_count = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['email', 'username', 'followers_count', 'following_count']

    def get_followers_count(self, obj):
        return obj.followed_by.count()

    def get_following_count(self, obj):
        return obj.following.count()

class UserProfileSerializer(ModelSerializer):
    class Meta:
        model = User
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
        model = User
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
