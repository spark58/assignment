from django.db import models
# Create your models here.


class Wall(models.Model):
    username = models.CharField(max_length=10, null=False, blank=False)
    password = models.CharField(max_length=120, null=False, blank=False)
    email = models.CharField(max_length=120, null=False, blank=False)
    wallPost = models.TextField()
