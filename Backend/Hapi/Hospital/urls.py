from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [

    path("", views.allHosp, name="allHosp"), # this will show all the hospitals

    path("states/", views.allstates, name="allstates"),  # this will show all the states present in database
    path("<str:myid>/districts/", views.alldistricts, name="alldistricts"),  # this will show all the districts present in database
    path("<str:myid>/<str:myidd>/pincodes", views.allpincodes, name="allpincodes"),  # this will show all the pincodes present in database

    path("states/<str:myid>/", views.stateHosp, name="stateHosp"),
    path("districts/<str:myid>/", views.districtHosp, name="districtHosp"),
    path("pincodes/<int:myid>/", views.pincodeHosp, name="pincodeHosp"),
    path("addHosp/",views.addHosp,name="addHosp"),
    path("filters/", views.allfilters, name="allfilters"),
    # path("speciality/<str:myid>/", views.fspeciality, name="speciality"),
    # path("typeGP/<str:myid>/", views.ftypeGP, name="typeGP"),
    # path("costWard/<int:myid>/", views.fcostWard, name="costWard"),
    # path("rating/<int:myid>/", views.frating, name="rating"),
    # path("availableBeds/<int:myid>/", views.favailableBeds, name="availableBeds"),


]