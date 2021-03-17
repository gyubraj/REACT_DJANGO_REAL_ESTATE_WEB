from django.contrib import admin
from .models import Contact
class ContactAdminView(admin.ModelAdmin):
    list_per_page = 25
    list_display = ('id','name','email','subject')
    list_display_links = ('id','email')

admin.site.register(Contact,ContactAdminView)
