# Generated by Django 3.1.7 on 2021-03-08 09:41

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('realtors', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='realtor',
            name='date_hired',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2021, 3, 8, 15, 26, 16, 557724)),
        ),
    ]
