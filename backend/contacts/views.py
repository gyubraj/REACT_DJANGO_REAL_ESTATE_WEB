
from rest_framework import permissions
from rest_framework.views import APIView
from .models import Contact
from django.core.mail import send_mail
from rest_framework.response import Response

class ContactCreateView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self,request,format=None):
        data=self.request.data
        print(data)
        message="Name :"+data['name'] + "\nEmail: "+data['email']+"\n\nmessage :"+data['message']

        try:
            send_mail(data['subject'],message,"gyubraj104@gmail.com",["tsantosh824@gmail.com"],fail_silently=False)
            contact=Contact(name=data['name'],message=data['message'],subject=data['subject'],email=data['email'])
            contact.save()
            return Response({'success':'message sent successfully'})
        except:
            return Response({'error':'Failed to send message'})
