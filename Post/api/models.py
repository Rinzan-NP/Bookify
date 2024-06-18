from django.db import models
import uuid


class BaseModel(models.Model):
    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    class Meta:
        abstract = True


class BackgroundImage(models.Model):
    name = models.CharField(max_length=50)
    background_image = models.ImageField(upload_to="background/", null=True, blank=True)


class UserProfile(models.Model):
    user_id = models.CharField(primary_key=True, max_length=50)
    username = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)


class Post(BaseModel):
    content = models.TextField()
    background_image = models.ForeignKey(
        BackgroundImage, on_delete=models.CASCADE, null=True, blank=True,default = 1
    )
    likes = models.IntegerField(default=0)
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
