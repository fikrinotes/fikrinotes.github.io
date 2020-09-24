var enkripsi = {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4,
  'e': 5,
  'f': 6,
  'g': 7,
  'h': 8,
  'i': 9,
  'j': 10,
  'k': 11,
  'l': 12,
  'm': 13,
  'n': 14,
  'o': 15,
  'p': 16,
  'q': 17,
  'r': 18,
  's': 19,
  't': 20,
  'u': 21,
  'v': 22,
  'w': 23,
  'x': 24,
  'y': 25,
  'z': 26,
  ' ': ' ',
  ',': ','
};

var hasil = {
  1: 'a',
  2: 'b',
  3: 'c',
  4: 'd',
  5: 'e',
  6: 'f',
  7: 'g',
  8: 'h',
  9: 'i',
  10: 'j',
  11: 'k',
  12: 'l',
  13: 'm',
  14: 'n',
  15: 'o',
  16: 'p',
  17: 'q',
  18: 'r',
  19: 's',
  20: 't',
  21: 'u',
  22: 'v',
  23: 'w',
  24: 'x',
  25: 'y',
  26: 'z'
};
alert("untuk pengalaman yang lebih baik,buka laman ini pada perangkat mobile")
function encryption() {
  var kat=document.getElementById('masukan').value;
  var kata=kat.toLowerCase();
  var x = Number(document.getElementById('pergeseran').value);
  
  var n = kata.length;
  var a = '';
  var akhir ;
  var b=0;
  while (b < n) {
    if (kata[b] in enkripsi) {
      akhir= enkripsi[kata[b]] + x;
      if (akhir > 26) {
        akhir = enkripsi[kata[b]] + x - 26;
      }
      a+= hasil[akhir];
    }
    else{a +=kata[b];}
    
    b = b +1;
    document.getElementById('out').innerHTML = a;
  }

}

function tes() {
  var x = document.getElementById('pergeseran').value;
  document.getElementById('out').innerHTML = x
}
