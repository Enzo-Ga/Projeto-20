
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var block1;
var block2;
var block3;

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	var block1_options ={
	   restitution: 0.5,
	   friction: 0.02,
	   frictionAir:0
	}

	var block2_options ={
		restitution: 0.7,
		friction: 0.01,
		frictionAir:1
	 }

	 var block3_options ={
		restitution: 0.01,
		friction: 1,
		frictionAir:0.3
	 }
   
	var ground_options ={
		isStatic: true
	  };
    
	block1 = Bodies.circle(220,10,15,block1_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(110,50,20,20,block2_options);
	World.add(world,block2);

	block3 = Bodies.rectangle(350,50,50,20,block3_options);
	World.add(world,block3);

	ground = Bodies.rectangle(200,410,400,20,ground_options);
    World.add(world,ground);

	Engine.run(engine);


	ellipseMode(RADIUS);
}


function draw() {
rectMode(CENTER);
  background("red");
  Engine.update(engine);
  
 ellipse(block1.position.x,block1.position.y,15);
 rect(block2.position.x,block2.position.y,20,20);
 rect(block3.position.x,block3.position.y,50,20);
 fill("red");
 rect(ground.position.x,ground.position.y,400,20);
}



