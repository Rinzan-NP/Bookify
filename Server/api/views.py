from django.shortcuts import get_object_or_404
from rest_framework.generics import CreateAPIView
from rest_framework.exceptions import ParseError, AuthenticationFailed
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from .utils import send_account_activation_email
from .serializers import *
from rest_framework.permissions import IsAuthenticated
from .models import Admire, Post
from rest_framework import generics

class RegisterView(CreateAPIView):
    serializer_class = UserRegisterSerializer

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        response.data = {
            "message": "Account created successfully!",
            "status": status.HTTP_201_CREATED,
        }

        user = User.objects.get(email=request.data.get("email"))
        send_account_activation_email(
            email=user.email, uid=user.id, username=user.username
        )

        return response


def create_tokens(user):

    refresh = RefreshToken.for_user(user)

    refresh["username"] = str(user.username)
    refresh["is_superuser"] = user.is_superuser
    user_detail = {
        "id": user.id,
        "username": user.username,
        "email": user.email,
        "isAdmin": user.is_superuser,
    }

    content = {
        "refresh": str(refresh),
        "access": str(refresh.access_token),
        "user": user_detail,
    }
    return content


class LoginView(APIView):
    def post(self, request):

        email = request.data.get("email")
        password = request.data.get("password")

        if not email or not password:
            raise ParseError("All Fields Are Required")

        user = User.objects.filter(email=email).first()

        if not user:
            raise AuthenticationFailed("Invalid Email Address")

        if user.blocked:
            raise AuthenticationFailed("You are blocked by admin! Please contact admin")
        if not user.verified:
            raise AuthenticationFailed("You are not verified")

        user = authenticate(username=email, password=password)

        if not user:
            raise AuthenticationFailed("Invalid Password")

        content = create_tokens(user)

        return Response(content, status=status.HTTP_200_OK)


class VerifyAccountView(APIView):
    def post(self, request):
        user = User.objects.get(id=request.data.get("id"))
        user.verified = True
        user.save()
        return Response({"message": "Verified"}, status=status.HTTP_202_ACCEPTED)


class GoogleLoginView(APIView):
    def post(self, request):
        email = request.data.get("email")
        user, created = User.objects.get_or_create(
            email=email,
            defaults={"verified": True},
        )

        if not created:
            user.verified = True
            user.username = request.data.get("username")
            user.save()

        content = create_tokens(user)
        return Response(content, status=status.HTTP_200_OK)


# profile


class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, email):
        profile_user = get_object_or_404(User, email=email)
        following = Admire.objects.filter(
            following=request.user, followed_by=profile_user
        ).exists()

        serializer = ProfileSerializer(profile_user)
        response = serializer.data
        response["following"] = following
        return Response(response, status=status.HTTP_200_OK)
    
class FollowView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request, email):
        print(request.user)
        profile_user = get_object_or_404(User, email=email)
        following = Admire.objects.filter(
            following=request.user, followed_by=profile_user
        ).exists()
        if following:
            Admire.objects.filter(
                following=request.user, followed_by=profile_user
            ).delete()
            return Response({"message":"Unfollowed"},status=status.HTTP_200_OK)
        else:
            Admire.objects.create(
                following=request.user, followed_by=profile_user
            )
            return Response({"message":"Followed"},status=status.HTTP_200_OK)
        

class PostCreateView(APIView):
    def post(self, request):
        data = request.data
        user_data = data.get("user_detail")
        quote = data.get("Quote")

        # Check if user exists, if not, create one
        user_id = user_data.get("user_id")
        user, created = User.objects.get_or_create(
            user_id=user_id,
            defaults={
                "username": user_data.get("username"),
                "email": user_data.get("email"),
            },
        )

        # Create post with the provided quote
        post = Post.objects.create(content=quote, user=user)

        serializer = PostSerializer(post)
        return Response(serializer.data, status=status.HTTP_201_CREATED)




class PostListView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class ProfilePostView(APIView):
    def get(self, request, email):
        posts = Post.objects.filter(user__email=email)
        serializer = ProfilePostSerializer(posts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)