from django.core.management.base import BaseCommand
from api.models import Company, Vacancy
import random

class Command(BaseCommand):
    help = 'Generate test data for companies and vacancies'

    def handle(self, *args, **kwargs):
        Company.objects.all().delete()
        Vacancy.objects.all().delete()

        companies = []
        for i in range(5):
            c = Company.objects.create(
                name=f'Company {i+1}',
                description='Awesome company!',
                city='Almaty',
                address=f'Street {i+1}'
            )
            companies.append(c)

        for i in range(20):
            Vacancy.objects.create(
                name=f'Vacancy {i+1}',
                description='Job opportunity',
                salary=random.uniform(100000, 1000000),
                company=random.choice(companies)
            )

        self.stdout.write(self.style.SUCCESS('✅ Test data created successfully!'))