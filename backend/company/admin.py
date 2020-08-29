from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Company


class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'founded', 'ceo', 'location')


admin.site.register(Company, CompanyAdmin)
