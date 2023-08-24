
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var radius = 35;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;


	var ball_option={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	//Create the Bodies Here.
	ball= Bodies.circle(10,20,9,ball_option);
	World.add(world,ball);
	Engine.run(engine);
  



groundObj= new ground(width/2,670,width,20);
leftSide = new ground(1100,600,20,120);
rightSide = new ground(1350,600,20,120);

}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius,radius);
  groundObj.display();
  leftSide.display();
  rightSide.display();


}



function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:10,y:-10});
}
}


