# Generated by Django 5.0.2 on 2024-03-08 06:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_backgroundimage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='backgroundimage',
            name='image',
            field=models.ImageField(upload_to='background/'),
        ),
    ]
