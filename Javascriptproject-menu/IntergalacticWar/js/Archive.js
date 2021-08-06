class Bullets {
  constructor(x,y) { 
    this.posx = x;
    this.posy = y;
  } 
  shot() {
    var t = setInterval(this.move,1000);
  }
  move() {
    this.posy = this.posy - 10;
    //this.style.top = this.posy + "px";
    console.log("hello world");
  }
}