import tkinter as tk

enkripsi={'a':1,'b':2,'c':3,'d':4,'e':5,'f':6,'g':7,'h':8,'i':9,'j':10,'k':11,'l':12,'m':13,'n':14,'o':15,'p':16,'q':17,'r':18,'s':19,'t':20,'u':21,'v':22,'w':23,'x':24,'y':25,'z':26,' ':' ',',':','}

hasil={1:'a',2:'b',3:'c',4:'d',5:'e',6:'f',7:'g',8:'h',9:'i',10:'j',11:'k',12:'l',13:'m',14:'n',15:'o',16:'p',17:'q',18:'r',19:'s',20:'t',21:'u',22:'v',23:'w',
24:'x',25:'y',26:'z'}

def encryption():
	x=int(pergeseran.get())
	kata=input.get()
	n=len(kata)
	a=''
	while n>0:
		if kata[-n] in enkripsi:
			akhir=enkripsi[kata[-n]]+x
			if akhir>26:
				akhir =enkripsi[kata[-n]]+x-26
			a+=hasil[akhir]
		else:
			a+=kata[-n]
		n=n-1
		ans['text']=a
	#ans['text']=input.get()
	

window=tk.Tk()
judul1=tk.Label(text='masukkan kata/kalimat untuk di enkripsi, \ndan gunakan underscore atau strip \nsebagai pengganti spasi:')
input=tk.Entry()

ans=tk.Label(text='')
pergeseran=tk.Entry()
judul2=tk.Label(text='nilai pergeseran:')

tombol=tk.Button(text='enkripsi',command=encryption,bg='#3C77D0',fg='white')
judul1.pack()
input.pack()
judul2.pack()
pergeseran.pack()
ans.pack()
tombol.pack()


	
window.mainloop()

