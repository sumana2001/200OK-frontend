from telnetlib import STATUS
from django.http import HttpResponse
from django.shortcuts import render
from .models import *
import json

# Create your views here.
def allHosp(request):
    # print(request)
    items = Hosp.objects.values()
    data = list(items)
    response = json.dumps(data)
    return HttpResponse(response, content_type="application/json", status=203)

def allstates(request):
    items = Hosp.objects.values('State')
    data = list(items)
    response = json.dumps(data)
    return HttpResponse(response, content_type="application/json")    

def alldistricts(request,myid):
    items = Hosp.objects.filter(State=myid).values('District')
    data = list(items)
    response = json.dumps(data)
    return HttpResponse(response, content_type="application/json")

def allpincodes(request,myid,myidd):
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


def allfilters(request):
    # print(request)
    items = Hosp.objects.values(
    'speciality',
    'typeGP',
    'costWard',
    'rating',
    'covid',
    'army',
    'availableBeds'
    )
    data = list(items)
    print(data)
    response = json.dumps(data)
    return HttpResponse(response, content_type="application/json")



def addHosp(request):
    if request.method == "POST":
        hname = request.POST.get('hname', '')
        speciality = request.POST.get('speciality', '')
        costWard = request.POST.get('costWard', '')
        rating = request.POST.get('rating', '')
        typeGP = request.POST.get('typeGP', '')
        contact = request.POST.get('contact', '')
        covid = request.POST.get('covid', '')
        army = request.POST.get('army', '')
        availableBeds = request.POST.get('availableBeds', '')
        State = request.POST.get('State', '')
        District = request.POST.get('District', '')
        pincode = request.POST.get('pincode', '')
        timings = request.POST.get('timings', '')
        Address = request.POST.get('Address', '')
        Hospital = Hosp(hname=hname,speciality=speciality,costWard=costWard,rating =rating , typeGP=typeGP, contact=contact,covid=covid,army=army,availableBeds=availableBeds,State=State,District=District,pincode=pincode,timings=timings,Address=Address)
        
        Hospital.save()
    return HttpResponse([{"hello":"world"}])