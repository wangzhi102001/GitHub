import unittest
from city_functions import city_function

class TestCountry(unittest.TestCase):

    def setUp(self):
        city = "beijing"
        country = "china"
        population= "4000000"

        def test_city_country_population(self):
            right_return = city_function(city,country,population)
            self.assertEqual(right_return,"Beijing China - Population 4000000")

        def test_cities(self):
            right_retrun = city_function(city,country,population)
            self.assertEqual(right_retrun,"Beijing China - Population 4000000")
        #return super().setUp()
        
unittest.main()
