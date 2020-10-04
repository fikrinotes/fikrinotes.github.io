function hitung() {
  var z1=document.getElementById('y1').value.split('+');
  var z2=document.getElementById('y2').value.split('+');
  var x11=z1[0].split('x');
  var x1=Number(x11[0]);
  var y11=z1[1].split('y=');
  var y1=Number(y11[0]);
  var c1=Number(y11[1]);
  var x22=z2[0].split('x');
  var x2=Number(x22[0]);
  var y22=z2[1].split('y=');
  var y2=Number(y22[0]);
  var c2=Number(y22[1]);
  var a = [[x1, y1], [x2, y2]];
  var ainv = math.inv(a);
  var b = [[c1], [c2]];
  var result = math.multiply(ainv, b);
  document.getElementById('hasil').innerHTML ="nilai x = "+ result[0] + " dan nilai y = " + result[1];
}
