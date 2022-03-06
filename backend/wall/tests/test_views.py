from .test_setup import TestSetUp


class TestViews(TestSetUp):

    def testUser_cannot_register(self):
        response = self.client.post(self.register_url)

        self.assertEqual(response.status_code, 400)
