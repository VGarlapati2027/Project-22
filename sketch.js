
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var ball;
var groundObj;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	ball_options={
		isStatic : 0,
		restitution:0.3,
		density = 1.2
		
		
	}

	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	Ball = matter.bodies.circle(100,400,4,ball_options);
	World.add(World,Ball);
	groundObj = new Ground(width/2,670,width,2);
	leftSide = new Ground(1100,600,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  drawSprites();
 
}



