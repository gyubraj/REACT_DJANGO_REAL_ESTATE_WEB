from .models import Listing
from rest_framework import serializers

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model=Listing
        fields=('title','address','city','state','price','sale_type','home_type','bedrooms','bathrooms','sqft','photo_main','slug')


class ListingDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model=Listing
        fields='__all__'
        lookup_field='slug'