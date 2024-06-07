from django.db import models
import uuid


class BaseModel(models.Model):
    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    class Meta:
        abstract = True

class User(models.Model):
    id = models.CharField(max_length=50,primary_key=True)
    username= models.CharField(max_length=50)

    @property
    def following(self):
        return UserProfile.objects.filter(followed_by=self).count()

    @property
    def followers(self):
        return UserProfile.objects.filter(following=self).count()


class UserProfile(BaseModel):
    following = models.ForeignKey(User, on_delete=models.CASCADE, related_name="following")
    followed_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name="followed_by")

