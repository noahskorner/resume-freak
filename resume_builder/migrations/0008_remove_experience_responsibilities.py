# Generated by Django 3.0.7 on 2020-11-17 22:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('resume_builder', '0007_remove_education_gpa'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='experience',
            name='responsibilities',
        ),
    ]