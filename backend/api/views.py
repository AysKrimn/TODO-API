from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Todos
from .serializer import TodosSerializers
# Create your views here.

routes = [

    {
        "route": "notes",
        "description": "tüm notları döndürür",
        "methods": "GET" 
    }
]


@api_view(["GET"])
def send_routes(request):
 

    return Response(routes)


@api_view(["GET"])
def get_notes(request):

    notes = Todos.objects.all()
    serialize = TodosSerializers(notes, many=True)
    
    print("isteği aldım")
    return Response(serialize.data)