# Generated by Django 4.0 on 2022-01-27 12:53

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('Hospital', '0003_hosp_city_hosp_district_hosp_state'),
    ]

    operations = [
        migrations.CreateModel(
            name='Hosp1',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('hname', models.CharField(default='', max_length=100)),
                ('speciality', models.CharField(default='', max_length=100)),
                ('costWard', models.CharField(default='', max_length=50)),
                ('rating', models.IntegerField(default=0)),
                ('typeGP', models.CharField(default='', max_length=50)),
                ('contact', models.CharField(default='', max_length=50)),
                ('covid', models.BooleanField()),
                ('army', models.BooleanField()),
                ('availableBeds', models.IntegerField(default=0)),
                ('State', models.CharField(default='', max_length=50)),
                ('District', models.CharField(default='', max_length=50)),
                ('City', models.CharField(default='', max_length=50)),
                ('pincode', models.IntegerField(default=0)),
                ('timings', models.CharField(default='', max_length=50)),
                ('Address', models.CharField(default='', max_length=300)),
            ],
        ),
    ]