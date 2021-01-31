from django.urls import path
from .views import RoomView, CreateRoomView, GetWordView, GetRoomView

urlpatterns = [
    path('rooms', RoomView.as_view()),
    path('room', CreateRoomView.as_view()),
    path('get-word', GetWordView.as_view()),
    path('get-room', GetRoomView.as_view())
]



