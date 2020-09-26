alert('untuk mendapatkan pengalaman yang lebih baik,buka website ini pada perangkat mobile');
var result=0;
document.getElementById('layar').innerHTML=0
function b1(){
  document.getElementById("layar").innerHTML='1';
  result+='1';
}

function b2(){
  document.getElementById("layar").innerHTML += '2';
  result+='2';
}
function b3() {
  document.getElementById("layar").innerHTML += '3';
  result+='3';
}
function b4() {
  document.getElementById("layar").innerHTML += '4';
  result+='4';
}
function b5() {
  document.getElementById("layar").innerHTML += '5';
  result+='5';
}
function b6() {
  document.getElementById("layar").innerHTML += '6';
  result+='6';
}
function b7() {
  document.getElementById("layar").innerHTML += '7';
  result+='7'
}
function b8() {
  document.getElementById("layar").innerHTML += '8';
  result+='8'
}
function b9() {
  document.getElementById("layar").innerHTML += '9';
  result+='9'
}

function bkali() {
  document.getElementById("layar").innerHTML += '×';
  result+="*"
}
function bbagi() {
  document.getElementById("layar").innerHTML += '÷';
  result+="/"
}
function btambah() {
  document.getElementById("layar").innerHTML += '+';
  result+="+"
}
function bkurang() {
  document.getElementById("layar").innerHTML += '-';
  result+='-'
}
function bmod() {
  document.getElementById("layar").innerHTML += 'mod';
  result+='%'
}
function bhasil() {
  document.getElementById("layar").innerHTML = eval(result) ;
}
function bAC() {
  document.getElementById("layar").innerHTML = 0;
}
