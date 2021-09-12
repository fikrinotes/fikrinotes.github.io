
#fikri mulyana setiawan copyright

import numpy as np
y=input('input equality:').split('+')
z=input('input equality:').split('+')
#for 1st equality
j=str(y[1]).split('y')
m=j[1].split('=')
#1st const
const=int(m[1])
#y1's coefficient
h=int(j[0])
a=y[0]
i=y[1]
c=str(a).split('x')
#x1's coefficient
d=int(c[0])
#for 2nd equality
e=z[0]
f=str(e).split('x')
#x2's coefficient
g=int(f[0])
p=str(z[1]).split('y')
q=p[1].split('=')
#2nd constant
konst=int(q[1])
#y2's coefficient
s=int(p[0])
A=np.array([[d,h],[g,s]])
Ainv=np.linalg.inv(A)
k=np.array([[const],[konst]])
result=np.dot(Ainv,k)
hasil=result.transpose()
X=np.array([['x']])
print(hasil)
print(result)


