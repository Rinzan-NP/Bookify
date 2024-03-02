from django.urls import path
from .views import RegisterView, LoginView, VerifyAccountView,GoogleLoginView
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path("register/", RegisterView.as_view(), name="user_register"),
    path("login/", LoginView.as_view(), name="user_login"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("verify/", VerifyAccountView.as_view(), name="verify_account"),
    path('google_login/', GoogleLoginView.as_view(), name="google_login"),
]
