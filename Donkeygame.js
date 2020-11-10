var b=10;
var score=0;
document.getElementById('skor').innerHTML="SCORE : 0";
var n = 0;
var garis = document.getElementById('garis');
var posxd = 275 ;
var posxc = 70 ;
var posyc = 93 ;
var car = document.getElementById('car');
var track = Math.floor(Math.random()*10);
var image = new Image(60,60);
image.src = 'donkeyimage.png';
donkey = document.getElementById('donkey');
donkey.appendChild(image);
donkey.style.left = 275 + "px";
if (track<5) {
  posyd = 93 ;
  donkey.style.top = posyd + "px";
}
else {
  posyd = 170 ;
  donkey.style.top = posyd + "px";
}

function carUp() {
  if (posxd === posxc) {
    if (posyd === posyc) {
      clearInterval(time);
      //buttonup.style.visibility="hidden";
      //buttondown.style.visibility="hidden";
    }
  }
  else {
    posyc = 93;
    car.style.top = 97 + "px";
  }
}

function carDown() {
  if (posxd === posxc) {
    if (posyd === posyc) {
      clearInterval(time);
    }
  }
  else{
    posyc = 170;
    car.style.top = 182 + "px"
  }
}


function play(){
   var time = setInterval(move,b);
   var waktu = setInterval(trans,60);
   var levelUp = setInterval(level,5000)
   var audio = new Audio('Super_Mario_Bros_-_Overworld_Theme_by_BlueSCD.mp3');
   audio.loop=true;
   audio.play();
}


function move() {
  if (posxd === posxc) {
    if (posyd === posyc) {
      clearInterval(time);
      audio.paused()
      
    }
    else {
      var track = Math.floor(Math.random()*10);
      if (track<5) {
        score+=1;
        document.getElementById('skor').innerHTML="SCORE : "+score;
        posyd = 93 ; 
        posxd = 275 ;
        donkey.style.top = posyd + "px";
        donkey.style.left = posxd + "px";
      }
      else {
        posyd = 170 ;
        posxd = 275 ;
        donkey.style.top = posyd + "px";
        donkey.style.left = posxd + "px";
        }
    }
  }
  else {
    posxd-=1
    donkey.style.left = posxd + "px";
  }
    
}
function trans() {
  n=n+1;
  if (n%2===0){
    garis.style.left= 2 + "px";
  }
  else{
    garis.style.left= 0 + "px";
  }
}

function restart() {
  var n = 0;
  var garis = document.getElementById('garis');
  var posxd = 275;
  var posxc = 70;
  var posyc = 93;
  var car = document.getElementById('car');
  var track = Math.floor(Math.random() * 10);
  var image = new Image(60, 60);
  image.src = 'donkeyimage.png';
  donkey = document.getElementById('donkey');
  donkey.appendChild(image);
  donkey.style.left = 275 + "px";
  if (track < 5) {
    posyd = 93;
    donkey.style.top = posyd + "px";
  }
  else {
    posyd = 170;
    donkey.style.top = posyd + "px";
  }
}
function level() {
  window.b-=4
}
