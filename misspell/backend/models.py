from django.db import models
import random

def generate_code():
  length = 6
  while True:
    code = ''.join(random.choices('1234567890', k = length))
    if Room.objects.filter(code=code).count() == 0:
      break
  return code    

class Room(models.Model):
  code = models.CharField(max_length=6, default=generate_code, unique=True)
  host = models.CharField(max_length=80, unique=True, default="")
  host_name = models.CharField(max_length=11, default="", unique=True)
  full = models.BooleanField(default=False)
  
class Player(models.Model):
  # name can be used as ID
  name = models.CharField(max_length=11, default="", unique=True)
  score = models.IntegerField(default=0)
  room = models.ForeignKey(Room, on_delete=models.CASCADE, default=None)













