//Hi, I know that you can see this whole javascript code.  That's why I warn you not to use the code of this game without my permission. just contact me at https://www.instagram.com/fikrimulyana_s for the permission.
var spaceship = document.querySelector('.spaceship');
var ufo = document.querySelector('.ufo');
var bullet = document.querySelector('.bullet_template');
//Bullets Class 
class Bullets extends Image{
  constructor(width, height, src, x, y) { 
    super(width, height, src);
    this.posx = x;
    this.posy = y;
  } 
  shot() {
    var t = setInterval(this.move,1000);
    bullet.appendChild(this);
  }
  move() {
    bullet.style.left = this.posx;
    this.posy = this.posy - 10;
    bullet.style.top = this.posy + "px";
  }
}
//execute fire functions
function fire() {
  var image = new Bullets(30,40,'Images/bullet.png',poss[0],poss[1]);
  image.shot();
}


//data about object position is stored in matrix form
var randomwalk = Math.floor(Math.random()*400);
var poss = [140,490];
var posu = [10,50];
ufo.style.top = posu[1] + "px";
// setInterval code 
umove= setInterval(move, 10);
function move () {
  if (posu[0] == 305) {
    var randomwalk = Math.floor(Math.random()*400);
    posu = [10,(50+randomwalk)]
    
  }
  else {
    posu[0] = posu[0] + 0.5;
    ufo.style.left = posu[0] + "px";
    ufo.style.top = posu[1] + "px";
  }
}
//functions for moving object
function ss_right() { 
  if (poss[0] == 300) {
    console.log("hello world");
  }
  else {
    poss[0] = poss[0] + 10;
    spaceship.style.left = poss[0] + "px";
  }
}

function ss_left() {
  if (poss[0] == 10) {
    console.log("hello world");
  }
  else {
    poss[0] = poss[0] - 10;
    spaceship.style.left = poss[0] + "px";
  }
} 


//posu[0] = posu[0] + 0.5;
//  ufo.style.left = posu[0] + "px"; 
