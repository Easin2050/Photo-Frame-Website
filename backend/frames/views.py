from django.shortcuts import render
from .models import Frame

def home(request):
    frames = Frame.objects.filter(is_active=True)  
    return render(request, 'home.html', {'frames': frames})
