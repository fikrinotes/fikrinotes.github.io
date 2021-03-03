class triangle:
	def __init__(self,base,height):
		self.height=height
		self.base=base
	def area(self):
		area=0.5*self.base*self.height
		print(area)
segitiga=triangle(2,3)
segitiga.area()