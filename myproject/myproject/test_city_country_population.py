from city_functions import city_function
import unittest

class TestCityCountryPopulation(unittest.TestCase):
    def test_city_country_population(self):
        right_return = city_function("beijing","china","4000000")
        self.assertEqual(right_return,"Beijing China - Population 4000000")


unittest.main()
