class Employee(object):
    """description of class"""
    def __init__(self, first,last,salary_by_year):
        self.first=first
        self.last=last
        self.salary_by_year= salary_by_year

    def give_raise(self,addnum=5000):
        self.salary_by_year+=addnum
        



