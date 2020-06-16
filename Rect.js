class Rect extends BaseClass {
  constructor(x,y){
    super(x,y,100,75);
    this.image = loadImage("sprites/dustbingreen.png");
  }

  display() {
    super.display();
  }
}