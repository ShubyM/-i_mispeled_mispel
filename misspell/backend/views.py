from .models import Room
from .serializers import RoomSerializer
from rest_framework import generics, status 
from rest_framework.views import APIView
from rest_framework.response import Response



# Create your views here.
class RoomView(generics.CreateAPIView):  
  queryset = Room.objects.all()
  serializer_class = RoomSerializer 





 

