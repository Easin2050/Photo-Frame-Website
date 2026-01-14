from django.contrib import admin
from .models import Frame

@admin.register(Frame)
class FrameAdmin(admin.ModelAdmin):
    list_display = ('title', 'is_active', 'created_at')
    list_filter = ('is_active',)
    search_fields = ('title',)
