from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

from .serializers import PostSerializer

from .models import Post, UserProfile

class PostCreateView(APIView):
    def post(self, request):
        data = request.data
        user_data = data.get('user_detail')
        quote = data.get('Quote')

        # Check if user exists, if not, create one
        user_id = user_data.get('user_id')
        user, created = UserProfile.objects.get_or_create(
            user_id=user_id,
            defaults={'username': user_data.get('username'), 'email': user_data.get('email')}
        )

        # Create post with the provided quote
        post = Post.objects.create(content=quote, user=user)

        serializer = PostSerializer(post)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

