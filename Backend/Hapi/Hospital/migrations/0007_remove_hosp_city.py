# Generated by Django 4.0 on 2022-01-28 06:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Hospital', '0006_hosp_delete_hosp1'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='hosp',
            name='City',
        ),
    ]