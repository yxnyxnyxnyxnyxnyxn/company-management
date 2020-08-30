from django.db import models


# Create your models here.
class Company(models.Model):
    COMPANY_SIZE = [
        (1, '1-10'),
        (2, '11-50'),
        (3, '51-200'),
        (4, '201-500'),
        (5, '501-1000'),
        (6, '1001-5000'),
        (7, '5001-10,000'),
        (8, '10,000+')
    ]
    name = models.CharField(max_length=150)
    headquarters = models.CharField(max_length=200,default=None, blank=True, null=True)
    industry = models.CharField(max_length=200,default=None, blank=True, null=True)
    size = models.PositiveSmallIntegerField(
        choices=COMPANY_SIZE,
        default=1
    )
    website = models.URLField(default=None, blank=True, null=True)
    description = models.TextField(default=None, blank=True, null=True)
    founded = models.CharField(max_length=4,default=None, blank=True, null=True)
    ceo = models.CharField(max_length=100,default=None, blank=True, null=True)

    def _str_(self):
        return self.title
