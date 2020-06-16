const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ball1;
var rect1;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(200,400);
	rect1 = new Rect(675,630,80,100);

	//Create a Ground
	ground = Bodies.rectangle(400, 680, 800, 10, {isStatic:true} );
 	World.add(world, ground);}

function draw() {
  Engine.update(engine);
  background(255,255,255);
  ball1.display(); 
  rect1.display();
  rectMode(CENTER);
  rect(400,680,800,10);
  
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-100});
	}
}



