from django.db import models
import uuid
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


class BaseModel(models.Model):
    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    class Meta:
        abstract = True


class MyAccountManager(BaseUserManager):
    def create_user(self, username, email, password=None):
        if not email:
            raise ValueError("Please enter an email address")
        if not password:
            raise ValueError("Please enter a password")

        user = self.model(email=self.normalize_email(email), username=username)
        user.set_password(password)
        user.save(using=self.db)
        return user

    def create_superuser(self, username, email, password=None):
        user = self.create_user(username, email, password)
        user.verified = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, BaseModel):
    username = models.CharField(max_length=50)
    email = models.EmailField(max_length=100, unique=True)
    verified = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    blocked = models.BooleanField(default=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    objects = MyAccountManager()

    def __str__(self):
        return self.email

    def full_name(self):
        return f"{self.username}"

    def has_perm(self, perm, obj=None):
        return self.is_superuser

    def has_module_perms(self, add_label):
        return True

class Admire(BaseModel):
    following = models.ForeignKey(User, on_delete=models.CASCADE, related_name="following")
    followed_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name="followed_by")
    

class BackgroundImage(models.Model):
    name = models.CharField(max_length=50)
    background_image = models.ImageField(upload_to="background/", null=True, blank=True)


class Post(BaseModel):
    content = models.TextField()
    background_image = models.ForeignKey(
        BackgroundImage, on_delete=models.CASCADE, null=True, blank=True,default = 1
    )
    likes = models.IntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)



