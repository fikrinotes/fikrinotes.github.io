import smtplib
fikri=smtplib.SMTP('smtp.gmail.com',587)
fikri.ehlo()
fikri.starttls()
fikri.login('notesfikri@gmail.com','fikrimulyanasetiawan')
fikri.sendmail('notesfikri@gmail.com','fikrimulyanasetiawan@gmail.com','Subject:test.\nhello, this is my first sending email with my own python script')
fikri.quit()
