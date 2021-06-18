var quote = document.querySelector('.quote');
var author = document.querySelector('.author');
fetch('https://random-math-quote-api.herokuapp.com')
.then(response => response.json())
.then(data => {
  quote.innerHTML = data['quote'];
  author.innerHTML ="- "+ data['author'];
})

var pattern = /([+,-]|)[0-9]+/g;
var pola = /[0-9]/g;
function hitung() {
  var pers1=document.getElementById('y1').value;
  var pers2=document.getElementById('y2').value;
  //konstanta
  var num1 = pers1.match(pattern);
  var num2 = pers2.match(pattern);
  //persamaan 1
  var x1=Number(num1[0]);
  var y1=Number(num1[1]);
  var c1=Number(num1[2]);
  //persamaan 2
  var x2=Number(num2[0]);
  var y2=Number(num2[1]);
  var c2=Number(num2[2]);
  //operasi matriks
  var a = [[x1, y1], [x2, y2]];
  var ainv = math.inv(a);
  var b = [[c1], [c2]];
  var result = math.multiply(ainv, b);
  document.getElementById('hasil').innerHTML ="nilai x = "+ result[0] + " dan nilai y = " + result[1];
}

function count() {
  var pers=document.getElementById('eq').value;
  var constant=pers.match(pattern);
  //a value
  var a = Number(constant[0]);
  //b value
  var b = Number(constant[2]);
  //c value
  var c = Number(constant[3]);
  //kesalahan terletak pada regular expression. seharusnya regular expression juga mengikutsertakan nilai plus dan minus
  var bsquare = b**2;
  var fourAC = 4*a*c;
  var det = bsquare-fourAC;
  var detsqrt = Math.sqrt(det);
  var x1 = ((-1*b)+detsqrt)/(2*a);
  var x2 = ((-1*b)-detsqrt)/(2*a);
  var f1 = -1*x1;
  var f2 = -1*x2;
  var trash = 0**2
  document.getElementById('thirdResult').innerHTML = "nilai x_1 ="+ x1+" dan x_2 ="+x2 +".  faktor persamaan tersebut adalah [x+("+f1+")][x+("+f2+")]."  
  //document.getElementById('thirdResult').innerHTML = a +" dan "+b +" dan "+c;
}

function calculate() {
  var pers1 = document.getElementById('ye1').value;
  var pers2 = document.getElementById('ye2').value;
  var pers3 = document.getElementById('ye3').value;
  //constant
  var num1 = pers1.match(pattern);
  var num2 = pers2.match(pattern);
  var num3 = pers3.match(pattern);
  //first variable:
  var x1 = Number(num1[0]);
  var y1 = Number(num1[1]);
  var z1 = Number(num1[2]);
  var c1 = Number(num1[3]);
  //second variable:
  var x2 = Number(num2[0]);
  var y2 = Number(num2[1]);
  var z2 = Number(num2[2]);
  var c2 = Number(num2[3]);
  //third variable:
  var x3 = Number(num3[0]);
  var y3 = Number(num3[1]);
  var z3 = Number(num3[2]);
  var c3 = Number(num3[3]);
  //var A = [[x1, y1, z1],[x2, y2, z2],[x3, y3, z3]];
  var a = [[x1,y1,z1],[x2,y2,z2],[x3,y3,z3]];
  var ainv=math.inv(a);
  var b = [[c1], [c2], [c3]];
  var result = math.multiply(ainv, b);
  document.getElementById('secondResult').innerHTML ="nilai x = "+result[0]+" , nilai y = "+result[1]+" dan nilai z = "+result[2];
  
}
