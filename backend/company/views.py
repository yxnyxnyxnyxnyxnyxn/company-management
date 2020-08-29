from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CompanySerializer
from .models import Company


class CompanyView(viewsets.ModelViewSet):
    serializer_class = CompanySerializer
    queryset = Company.objects.all()