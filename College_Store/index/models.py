from django.db import models

# Create your models here.
class Testimonial(models.Model):
    name=models.CharField(max_length=200)
    image=models.ImageField(upload_to='photo')
    descript=models.TextField()
    def __str__(self):
        return self.name