# Generated by Django 5.0.2 on 2024-03-14 12:04

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_rename_user_userprofile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='background_image',
            field=models.ForeignKey(blank=True, default=1, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.backgroundimage'),
        ),
    ]