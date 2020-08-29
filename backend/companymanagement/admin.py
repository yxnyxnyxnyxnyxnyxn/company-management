from django.contrib import admin
from .models import Company
# Register your models here.

class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name','description','industry','location','CEO','founded')

admin.site.register(Company,CompanyAdmin)