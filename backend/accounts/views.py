from django.contrib.auth import get_user_model
User=get_user_model()
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions

class SignupView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self,request,format=None):
        data=self.request.data
        name=data['name']
        email=data['email']
        password=data['password']
        password2=data['password2']
        if password==password2:
            if User.objects.filter(email=email).exists():
                return Response({'error':'Email already exists'})
            else:
                if len(password)<8:
                    return Response({'error':'Password must be at least 8 characters'})
                else:
                    if len(name.strip())<1:
                        return Response({'error':'Name cannot be empty'})
                    else:
                        user=User.objects.create_user(email=email,password=password,name=name)
                        user.save()
                        return Response({'success':'User created successfully'})
        else:
            return Response({'error':'Password do not match'})
