var now=1;
let t;
let jam;
let menit;
let detik;
let time;
function interval(){
  t=setInterval(function(){
    time1=now/3600;
    jam=Math.floor(time1);
    menit=Math.floor((now%3600)/60);
    detik=Math.floor((now%3600)%60);
    document.getElementById('hasil').innerHTML=jam+":"+menit+":"+detik;
    now=now+1;
  

  },1000)
}
function stop(){
  clearInterval(t);
}
function bersih(){
  document.getElementById('hasil').innerHTML="00:00:00";
  now=1;
}
