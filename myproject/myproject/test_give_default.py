import unittest
from Employees import Employee

class TestEmployeeGiveRaise(unittest.TestCase):

   def setUp(self):
    
       self.testtarget = Employee("Bob","Green",10000)
       self.addnum = 8000
       self.right_salary1 = 15000
       self.right_salary2 = 18000

   def test_give_default(self):
       self.testtarget.give_raise()
       self.assertEqual(self.testtarget.salary_by_year,self.right_salary1)

   def test_give_custom_raise(self):
       self.testtarget.give_raise(self.addnum)
       self.assertEqual(self.testtarget.salary_by_year,self.right_salary2)

unittest.main()


            