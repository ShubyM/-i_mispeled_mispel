from django.urls import path
from .views import RoomView, CreateRoomView, GetWordView

urlpatterns = [
    path('rooms', RoomView.as_view()),
    path('create-room', CreateRoomView.as_view()),
    path('get-word', GetWordView.as_view())
]



