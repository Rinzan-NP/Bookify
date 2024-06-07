from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Import a suitable JWT library (e.g., PyJWT)
import jwt  # Assuming PyJWT is installed


class ProfileView(APIView):
    def get(self, request):

        # try:
         
            token = request.headers["Authorization"].split(' ')[1]
            print(token)
            # Decode the JWT token
            decoded_jwt = jwt.decode(token,algorithms=["HS256"],signature="")
            print(decoded_jwt)
            
            # Access decoded data as needed
            user_id = decoded_jwt.get("user_id")  # Example usage
            # You can now use the decoded_jwt data for further processing
            return Response(
                {"message": "JWT decoded successfully"}, status=status.HTTP_200_OK
            )

        # except jwt.exceptions.DecodeError:
        #     return Response(
        #         {"error": "Invalid JWT"}, status=status.HTTP_401_UNAUTHORIZED
        #     )

        # except KeyError:
        #     return Response(
        #         {"error": "Authorization header missing"},
        #         status=status.HTTP_401_UNAUTHORIZED,
        #     )
