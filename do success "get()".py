import tkinter as tk
def click():
	label['text']=input.get()
	
window=tk.Tk()
input=tk.Entry()
label=tk.Label(text='contoh')
tombol=tk.Button(text='tekan',command=click)
input.pack()
tombol.pack()
label.pack()
window.mainloop()
