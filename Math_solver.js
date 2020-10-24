function hitung() {
  var pers1=document.getElementById('y1').value.split('+');
  var pers2=document.getElementById('y2').value.split('+');
  var x11=pers1[0].split('x');
  var x1=Number(x11[0]);
  var y11=pers1[1].split('y=');
  var y1=Number(y11[0]);
  var c1=Number(y11[1]);
  var x22=pers2[0].split('x');
  var x2=Number(x22[0]);
  var y22=pers2[1].split('y=');
  var y2=Number(y22[0]);
  var c2=Number(y22[1]);
  var a = [[x1, y1], [x2, y2]];
  var ainv = math.inv(a);
  var b = [[c1], [c2]];
  var result = math.multiply(ainv, b);
  document.getElementById('hasil').innerHTML ="nilai x = "+ result[0] + " dan nilai y = " + result[1];
}
function calculate() {
  var pers1 = document.getElementById('ye1').value.split('+');
  var pers2 = document.getElementById('ye2').value.split('+');
  var pers3 = document.getElementById('ye3').value.split('+');
  //first variable:
  var x11 = pers1[0].split('x');
  var x1 = Number(x11[0]);
  var y11 = pers1[1].split('y');
  var y1 = Number(y11[0]);
  var z11 = pers1[2].split('z=');
  var z1 = Number(z11[0]);
  var c1 = Number(z11[1]);
  //second variable:
  var x22 = pers2[0].split('x');
  var x2 = Number(x22[0]);
  var y22 = pers2[1].split('y');
  var y2 = Number(y22[0]);
  var z22 = pers2[2].split('z=');
  var z2 = Number(z22[0]);
  var c2 = Number(z22[1]);
  //third variable:
  var x33 = pers3[0].split('x');
  var x3 = Number(x33[0]);
  var y33 = pers3[1].split('y');
  var y3 = Number(y33[0]);
  var z33 = pers3[2].split('z=');
  var z3 = Number(z33[0]);
  var c3 = Number(z33[1]);
  var a = [[x1, y1, z1], [x2, y2, z2], [x3, y3, z3]];
  var ainv = math.inv(a);
  var b = [[c1], [c2], [c3]];
  var result = math.multiply(ainv, b);
  document.getElementById('secondResult').innerHTML ="nilai x = "+result[0]+" , nilai y = "+result[1]+" dan nilai z = "+result[2];
}
