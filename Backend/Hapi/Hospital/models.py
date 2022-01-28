from django.db import models




# Create your models here.
class Hosp(models.Model):
    hname = models.CharField(max_length=100, default="")
    speciality = models.CharField(max_length=100, default="")
    costWard = models.CharField(max_length=50, default="")
    rating = models.IntegerField(default=0)
    typeGP = models.CharField(max_length=50, default="")
    contact = models.CharField(max_length=50, default="")
    covid = models.BooleanField()
    army = models.BooleanField()
    availableBeds=models.IntegerField(default=0)
    State = models.CharField(max_length=50, default="")
    District = models.CharField(max_length=50, default="")
    # City= models.CharField(max_length=50, default="")
    pincode=models.IntegerField(default=0)
    timings=models.CharField(max_length=50, default="")
    Address=models.CharField(max_length=300, default="")


    # image = models.ImageField(upload_to="shop/images", default="")

    def __str__(self):
        return self.hname

