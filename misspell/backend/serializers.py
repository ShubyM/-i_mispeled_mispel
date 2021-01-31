from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
  class Meta:
    model = Room
    fields = ('code', 'full', 'host', 'host_name')

class CreateRoomSerializer(serializers.ModelSerializer):
  class Meta:
    model = Room
    # Do weed need fields
    fields = ('host_name', 'full')

class WordSerializer(serializers.Serializer):
  count = serializers.IntegerField()
  






