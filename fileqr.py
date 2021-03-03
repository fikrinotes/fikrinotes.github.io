import qrcode
image=qrcode.make('https://fikrimulyanasetiawan.github.io')
image.save('myqr.png','PNG')