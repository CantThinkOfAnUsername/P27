
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(600,300,30)
	ground = new Ground(600,195,1200,40)
	Line = new Chain(ball.body, ground.body)
	ball2 = new Ball(615,300,30)
	Line2 = new Chain(ball2.body, ground.body)
	ball3 = new Ball(615,300,30)
	Line3 = new Chain(ball3.body, ground.body)
	ball4 = new Ball(615,300,30)
	Line4 = new Chain(ball4.body, ground.body)
	ball5 = new Ball(615,300,30)
	Line5 = new Chain(ball5.body, ground.body)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  ground.display();
  Line.display();
  ball2.display();
  Line2.display();
  ball3.display();
  Line3.display();
  ball4.display();
  Line4.display();
  ball5.display();
  Line5.display();
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x: mouseX, y: mouseY});
}

