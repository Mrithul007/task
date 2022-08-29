from django.shortcuts import render
from . models import Testimonial
from django.contrib import messages, auth
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
# Create your views here.
def operation(request):
    x = Testimonial.objects.all()
    return render(request,"index.html")

def logout(request):
    auth.logout(request)
    return redirect('/')

def submit(request):
    return render(request,"message.html")