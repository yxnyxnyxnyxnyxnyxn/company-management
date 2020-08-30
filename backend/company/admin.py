from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Company


class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'headquarters','industry','size','description', 'website','founded', 'ceo')


admin.site.register(Company, CompanyAdmin)

