import city_functions
import unittest
class CityCountryTestCase(unittest.TestCase):
    def test_cities(self):
        right_retrun = city_functions.city_function("beijing","china",'5000000')
        self.assertEqual(right_retrun,"Beijing China - Population 5000000")

unittest.main()

