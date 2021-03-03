def getBattery():
	n=int(input())
	initial=50
	events=[]
	for i in range (n):
		x=int(input())
		events+=[x]
	a=0
	while n>0:
		a=a+events(-n)
		n=n-1
	battery=initial+a
	print(battery)
getBattery()