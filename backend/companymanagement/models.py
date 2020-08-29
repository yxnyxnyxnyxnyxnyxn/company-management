from django.db import models


# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField()
    industry = models.CharField(max_length=100)
    location = models.CharField(max_length=300)
    CEO = models.CharField(max_length=150)
    founded = models.DateField()

    def _str_(self):
        return self.name