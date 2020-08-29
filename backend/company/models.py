from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=150)
    description = models.TextField()
    founded = models.DateField()
    ceo = models.CharField(max_length=100)
    location = models.CharField(max_length=200)

    def _str_(self):
        return self.title