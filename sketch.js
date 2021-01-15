
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var brick;

var ball1, ball2, ball3, ball4, ball5;

var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	brick = new Box(400, 350, 200, 20);

	ball1 = new Ball(320, 500, 20);
	ball2 = new Ball(360, 500, 20);
	ball3 = new Ball(400, 500, 20);
	ball4 = new Ball(440, 500, 20);
	ball5 = new Ball(480, 500, 20);

	rope1 = new Rope(ball1.body, brick.body, -80, 0);
	rope2 = new Rope(ball2.body, brick.body, -40, 0);
	rope3 = new Rope(ball3.body, brick.body, 0, 0);
	rope4 = new Rope(ball4.body, brick.body, +40, 0);
	rope5 = new Rope(ball5.body, brick.body, +80, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");

  brick.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}
