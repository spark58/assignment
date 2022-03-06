from rest_framework.test import APITestCase, APIClient
from django.urls import reverse


class TestSetUp(APITestCase):

    def setUp(self):
        self.register_url = reverse('register/')
        self.login_url = reverse('login/')

        user_data = {
            'username': "testUser",
            'email': "test123@helloTest.com",
            'password': "123ase123!",
        }

        return super().setUp()

    def tearDown(self):
        return super().tearDown()
