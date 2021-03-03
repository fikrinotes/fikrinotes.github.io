import numpy as np
A=np.array([[1,3],[-1,5]])
c=np.linalg.det(A)
d=np.linalg.inv(A)
b=np.linalg.eigvals(A)
print('Eigenvalues=',b)
print('determinant=',c)
print('inverseA:')
print(d)