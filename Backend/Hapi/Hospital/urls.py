from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [

    path("", views.allHosp, name="allHosp"),
    path("states/", views.allstates, name="allstates"),
    path("<str:myid>/district/", views.alldistrict, name="alldistrict"),
    path("<str:myid>/<str:myidd>/pincode", views.allpincode, name="allpincode"),
    path("states/<str:myid>/", views.stateHosp, name="stateHosp"),
    path("district/<str:myid>/", views.districtHosp, name="districtHosp"),
    path("pincode/<int:myid>/", views.pincodeHosp, name="pincodeHosp"),
    

]