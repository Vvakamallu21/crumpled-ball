var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

	var ball_options = {
		density: 1.2,
		restitution: 1,
		isStatic: false,
		friction: 0
	}
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(100,100,20,ball_options)
	GroundObj = new Ground(400,680, windowWidth, 20)
	leftWall = new Ground(800,600,20,145)
	rightWall = new Ground(950,600,20,145)
	World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  Engine.update(engine)

  GroundObj.display()
  leftWall.display()
  rightWall.display()
  ellipse(ball.position.x,ball.position.y,20,20)
}
function keyPressed(){
	if (keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ball,ball.positon,{x:50,y:-25})
	}
}



