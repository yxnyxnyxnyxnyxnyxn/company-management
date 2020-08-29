# Generated by Django 3.1 on 2020-08-29 19:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=300)),
                ('description', models.TextField()),
                ('industry', models.TextField()),
                ('location', models.TextField()),
                ('CEO', models.CharField(max_length=150)),
                ('founded', models.DateField()),
            ],
        ),
    ]
