from datetime import *
waktu=datetime.now()
x=datetime.date(waktu)
tanggal=x.day
bulan=x.month
tahun=x.year
jawaban=' '
while jawaban==' ':
	print('tanggal sekarang=',tanggal)
	print('bulan sekarang='+str(bulan))
	print('tahun sekarang=',tahun)
	print('sekarang tanggal:'+str(tanggal)+'-'+str(bulan)+'-'+str(tahun))
	print('sekarang tanggal',x)
	a=str(tanggal)+'-'+str(bulan)+'-'+str(tahun)
	if a==x:
		print('sama')
	else:
		print('berbeda')
	jawaban=input()