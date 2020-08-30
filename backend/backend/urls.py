from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from company import views

router = routers.DefaultRouter()
router.register(r'companies', views.CompanyView, 'company')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]