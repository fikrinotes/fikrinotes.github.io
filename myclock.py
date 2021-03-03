import os
import time
import datetime
i=0
a=1
b=datetime.datetime.now()
while i<70:
	c=b+ datetime.timedelta(seconds=a)
	print(c)
	time.sleep(1)
	os.system('clear')
	i=i+1
	a=a+1
print(c)