import webbrowser 
url=input('masukkan url:')
url=url[:10]+"ss"+url[10:]
webbrowser.open(url)