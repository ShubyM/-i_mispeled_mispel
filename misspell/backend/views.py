import random
from .models import Room, Player
from .words import WORDS
from .serializers import RoomSerializer, CreateRoomSerializer, WordSerializer
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response


class GetWordView(APIView):
  serializer_class = WordSerializer

  def get(self, request, format=None):
    return Response(random.choice(WORDS), status=status.HTTP_200_OK)


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
   




 
