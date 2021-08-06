var n=1
function send() {
  greeting= ["hai", "hello", "hallo", "halo", "woi","hei","haii", "tolong saya", "saya ingin minta tolong", "apa yang bisa kamu lakukan?", "apa yang bisa kau lakukan?", "apa yang bisa anda lakukan?"]
  var holder = ["lanyak","siapa namamu?","hai","hallo", "apa yang bisa kamu lakukan?", "apa yang bisa kau lakukan?", "apa yang bisa anda lakukan?", "sapa saya", "tolong sapa saya"];
  var pertanyaan=document.getElementById("masukan").value;
  var ask=pertanyaan.toLowerCase()
  var str=ask.split(" ");
  if (ask==""){
    alert("ketik pesan anda")
  }
  
  else {
    var newAns = document.createElement("div");
    newAns.setAttribute('class', 'human');
    document.getElementsByClassName('display')[0].appendChild(newAns);
    document.getElementsByClassName('human')[n-1].innerHTML =ask;
    if  (ask == holder[1]) {
      var newDiv = document.createElement("div");
      newDiv.setAttribute('class', 'robot');
      document.getElementsByClassName('display')[0].appendChild(newDiv);
      document.getElementsByClassName('robot')[n].innerHTML = "saya adalah f - chatbot";
      n=n+1;
    }
    else if (ask == holder[0]) {
      var newDiv = document.createElement("div");
      newDiv.setAttribute('class', 'robot');
      document.getElementsByClassName('display')[0].appendChild(newDiv);
      document.getElementsByClassName('robot')[n].innerHTML = "Lanyak taruih woooiiii!!!!";
      n=n+1;
    }
    
    else if (ask==holder[3]) {
      var newDiv = document.createElement("div");
      newDiv.setAttribute('class', 'robot');
      document.getElementsByClassName('display')[0].appendChild(newDiv);
      document.getElementsByClassName('robot')[n].innerHTML = "Hai, ada yang bisa saya bantu?";
      n = n + 1;
    }
    
    else if (ask == holder[2]) {
      var newDiv = document.createElement("div");
      newDiv.setAttribute('class', 'robot');
      document.getElementsByClassName('display')[0].appendChild(newDiv);
      document.getElementsByClassName('robot')[n].innerHTML = "Hai, ada yang bisa saya bantu?";
      n = n + 1;
    }
    else if (ask==holder[4]) {
      var newDiv = document.createElement("div");
      newDiv.setAttribute('class', 'robot');
      document.getElementsByClassName('display')[0].appendChild(newDiv);
      document.getElementsByClassName('robot')[n].innerHTML ="Untuk sekarang, saya hanya dapat melakukan beberapa hal, seperti menyapa anda, menemukan solusi persoalan matematika, dan sebagainya. anda bisa mencobanya";
      n = n + 1;
    }
    else if (ask == holder[5]) {
      var newDiv = document.createElement("div");
      newDiv.setAttribute('class', 'robot');
      document.getElementsByClassName('display')[0].appendChild(newDiv);
      document.getElementsByClassName('robot')[n].innerHTML = "Untuk sekarang, saya hanya dapat melakukan beberapa hal, seperti menyapa anda, menemukan solusi persoalan matematika, dan sebagainya. anda bisa mencobanya";
      n = n + 1;
    }
    else if (ask == holder[6]) {
      var newDiv = document.createElement("div");
      newDiv.setAttribute('class', 'robot');
      document.getElementsByClassName('display')[0].appendChild(newDiv);
      document.getElementsByClassName('robot')[n].innerHTML = "Untuk sekarang, saya hanya dapat melakukan beberapa hal, seperti menyapa anda, menemukan solusi persoalan matematika, dan sebagainya. anda bisa mencobanya";
      n = n + 1;
    }
    else if (ask == holder[7]) {
      var newDiv = document.createElement("div");
      newDiv.setAttribute('class', 'robot');
      document.getElementsByClassName('display')[0].appendChild(newDiv);
      document.getElementsByClassName('robot')[n].innerHTML = "Halo, tuan";
      n = n + 1;
    }
    else if (ask == holder[8]) {
      var newDiv = document.createElement("div");
      newDiv.setAttribute('class', 'robot');
      document.getElementsByClassName('display')[0].appendChild(newDiv);
      document.getElementsByClassName('robot')[n].innerHTML = "Halo, tuan";
      n = n + 1;
    }
    
    else{
      var newDiv = document.createElement("div");
      newDiv.setAttribute('class', 'robot');
      document.getElementsByClassName('display')[0].appendChild(newDiv);
      ad=ask.split("+");
      adw=ad.join("%2B")
      add=str.join('+');
      addr=str.join('_')
      main1="https://www.wolframalpha.com/input/?i="
      address1=main1+adw;
      main2 = "https://id.m.wikipedia.org/wiki/"
      address2 = main2 + addr;
      main3 = "https://www.google.com/search?q="
      address3 = main3 + add + "&aqs=chrome&sourceid=chrome-mobile&ie=UTF-8";
      var x1=document.createElement("A");
      var t1=document.createTextNode(" Hasil pencarian Wolfram Alpha  ||")
      x1.setAttribute("href", address1);
      x1.appendChild(t1);
      document.getElementsByClassName('robot')[n].appendChild(x1);
      
      var x2 = document.createElement("A");
      var t2 = document.createTextNode("   Hasil pencarian wikipedia  ||")
      x2.setAttribute("href", address2);
      x2.appendChild(t2);
      document.getElementsByClassName('robot')[n].appendChild(x2);
      var x3 = document.createElement("A");
      var t3 = document.createTextNode("   hasil pencarian google search")
      x3.setAttribute("href", address3);
      x3.appendChild(t3);
      document.getElementsByClassName('robot')[n].appendChild(x3);
      
      //document.getElementsByClassName('robot')[n].innerHTML = "Lanyak taruih";
      n=n+1;
    }
  }
  
  document.getElementById("masukan").value='';
}


