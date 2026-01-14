from django.db import models
from django.db.models.signals import post_delete
from django.dispatch import receiver
import os

class Frame(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='frames/')
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

# Delete file from disk when Frame is deleted
@receiver(post_delete, sender=Frame)
def delete_frame_file(sender, instance, **kwargs):
    if instance.image:
        if os.path.isfile(instance.image.path):
            os.remove(instance.image.path)
