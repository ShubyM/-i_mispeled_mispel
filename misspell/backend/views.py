import random
import requests
from .models import Room, Player
from .words import WORDS
from .serializers import RoomSerializer, CreateRoomSerializer, WordSerializer
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response


BASE = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" 
KEY = "6f4ec53e-bbd2-4f26-b9d5-1370b625ea47"

class GetWordView(APIView):
  serializer_class = WordSerializer
  def get(self, request, format=None):
    word = random.choice(WORDS)
    definition = requests.get(BASE + word + "?key=" + KEY).json()
    ret = {'word' : word, 'defintion' : definition}
    return Response(ret, status=status.HTTP_200_OK)

class RoomView(generics.CreateAPIView):
  queryset = Room.objects.all()
  serializer_class = RoomSerializer


class CreateRoomView(APIView):
  serializer_class = CreateRoomSerializer

  def post(self, request, format=None):
    # is active session?
    if not self.request.session.exists(self.request.session.session_key):
      self.request.session.create()
    serializer = self.serializer_class(data=request.data)
    if serializer.is_valid():
      host = self.request.session.session_key
      host_name = serializer.data.get('host_name')
      queryset = Room.objects.filter(host=host)
      if queryset.exists():
        return Response(None, status=status.HTTP_404_NOT_FOUND)
      else:
        room = Room(host=host, host_name=host_name)
        room.save()
        Player.objects.create(name=host_name, room=room)
        return Response(RoomSerializer(room).data, status=status.HTTP_201_CREATED)

    return Response("I don't why this happened", status=status.HTTP_404_NOT_FOUND)
   




 
