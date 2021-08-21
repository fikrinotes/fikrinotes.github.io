function hitung(){
    var bb=Number(document.getElementById('bb').value);
    var tb=Number(document.getElementById('tb').value);
    if (tb>5) {
      alert ("maaf, tinggi badan kamu harus dalam satuan meter. apa kamu yakin tinggi badan-mu " + tb + "meter? tinggi sekali 😦😧😮")
      bb=0;
      tb=0;
    }
    var num=tb*tb;
    var bmi=bb/num;
    var print=document.getElementById('hasil');
    if(bmi<18.5){
      print.innerHTML=" dengan tinggi badan "+tb+"meter , anda tergolong kurus";
    }
    if(bmi>=18.5 && bmi<25){
      print.innerHTML="tinggi dan berat badan anda ideal";
    }
    if(bmi>=25 && bmi<30){
      print.innerHTML="dengan tinggi"+tb+" meter, anda mulai kelebihan berat badan";
    }
    if(bmi>=30 && bmi<35){
      print.innerHTML="anda termasuk ke golongan obesitas tahap 1";
    }
    if(bmi>=35 && bmi<40){
      print.innerHTML="anda termasuk ke golongan obesitas tahap 2, berhati-hatilah";
    }
    if(bmi>40){
      print.innerHTML="anda termasuk ke golongan obesitas tahap 3";
    }
   
  }
