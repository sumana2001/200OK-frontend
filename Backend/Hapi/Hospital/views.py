from telnetlib import STATUS
from django.http import HttpResponse
from django.shortcuts import render
from .models import *
import json

# Create your views here.
def allHosp(request):
    items = Hosp.objects.values()
    data = list(items)
    print(data)
    response = json.dumps(data)
    return HttpResponse(response, content_type="application/json", status=203)

def allstates(request):
    items = Hosp.objects.values('State')
    data = list(items)
    response = json.dumps(data)
    return HttpResponse(response, content_type="application/json")    

def alldistrict(request,myid):
    items = Hosp.objects.filter(State=myid).values('District')
    data = list(items)
    response = json.dumps(data)
    return HttpResponse(response, content_type="application/json")

def allpincode(request,myid,myidd):
    items = Hosp.objects.filter(State=myid,District=myidd).values('pincode')
    data = list(items)
    response = json.dumps(data)
    return HttpResponse(response, content_type="application/json")

def stateHosp(request,myid):
    items = Hosp.objects.filter(State=myid).values()
    data = list(items)
    response = json.dumps(data)
    return HttpResponse(response, content_type="application/json")
    

def districtHosp(request,myid):
    items = Hosp.objects.filter(District=myid).values()
    data = list(items)
    response = json.dumps(data)
    return HttpResponse(response, content_type="application/json")

def pincodeHosp(request,myid):
    items = Hosp.objects.filter(pincode=myid).values()
    data = list(items)
    response = json.dumps(data)
    return HttpResponse(response, content_type="application/json")
