# Generated by Django 2.2.6 on 2020-05-07 16:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('workprogramsapp', '0013_topic_url_online_course'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='fieldofstudyworkprogram',
            unique_together=set(),
        ),
    ]