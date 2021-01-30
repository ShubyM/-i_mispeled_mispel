from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
  class Meta:
    model = Room
    fields = ('code', 'full')

class CreateRoomSerializer(serializers.ModelSerializer):
  class Meta:
    model = Room
    # Do we need fields?
    fields = () 




