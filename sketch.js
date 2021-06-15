
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var angle  = 60
var angle2  = 60
var angle3 = 100
function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
    
var ground_options = {
	isStatic : true}

	ground = Bodies.rectangle(200,390,400,20,ground_options);
	World.add(world,ground);
 
	ground2 = Bodies.rectangle(100,280,100,20,ground_options);
	World.add(world,ground2);
  
	ground3 = Bodies.rectangle(300,280,100,20,ground_options);
	World.add(world,ground3);
  
	circle_options={
      restitution: 0.5,
     frictionAir:0.01,
          } 
    
    ball = Bodies.circle(200,0,5,circle_options);
    World.add(world,ball);
	  ball1 = Bodies.circle(220,0,5,circle_options);
    World.add(world,ball1);
    ball2 = Bodies.circle(240,0,5,circle_options);
	  World.add(world,ball2) 
	  ball3 = Bodies.circle(200,-25,5,circle_options);
    World.add(world,ball3);
    ball4 = Bodies.circle(200,-50,5,circle_options);
    World.add(world,ball4);
	
    rotator1 = Bodies.rectangle(200,200,100,10,ground_options);
    World.add(world,rotator1);
    rotator2 = Bodies.rectangle(200,200,10,100,ground_options);
    World.add(world,rotator2);
    
    rotator3 = Bodies.rectangle(200,200,10,100,ground_options);
    World.add(world,rotator3);
    
    

}


function draw() {
  Engine.update(engine);

  rectMode(CENTER);
  background("yellow");
  fill("red");
  rect(ground.position.x, ground.position.y,400,20);
  rect(ground2.position.x, ground2.position.y,100,20);
  rect(ground3.position.x, ground3.position.y,100,20);

 ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,5,5);
 ellipse(ball1.position.x,ball1.position.y,5,5);
 ellipse(ball2.position.x,ball2.position.y,5,5);
 ellipse(ball3.position.x,ball3.position.y,5,5);
 ellipse(ball4.position.x,ball4.position.y,5,5);
 

 Body.rotate(rotator1,angle);
 push ();
 translate (rotator1.position.x,rotator1.position.y)
 rotate(angle);
 rect(0,0,100,10);
 pop ();
 angle = angle+0.02 ;

 Body.rotate(rotator1,angle2);
 push ();
 translate (rotator2.position.x,rotator2.position.y)
 rotate(angle2);
 rect(0,0,10,100);
 pop ();
 angle2 = angle2 +0.04 ;

 Body.rotate(rotator1,angle3);
 push ();
 translate (rotator3.position.x,rotator3.position.y)
 rotate(angle3);
 rect(0,0,10,100);
 pop ();
 angle3 = angle3 +0.04 ;
 

}



