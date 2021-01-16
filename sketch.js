const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var aiEngine;
var aiWorld;
var paper , ground , dustbin;

function preload()
{	
}

function setup() {
	createCanvas(800, 700);


	aiEngine = Engine.create();
	aiWorld = aiEngine.world;

	//Create the Bodies Here.
    
	paper = new Shelf();
	
	dustbin = new Dustbin();

    ground = new Ground(400 , 690 , 800 , 10);


	Engine.run(aiEngine);
  
}


function draw() {
  background("lightgreen");

  Engine.update(aiEngine);

  paper.display();

  dustbin.display();

  ground.display();

  
 
}


function keyPressed() {

  if(keyCode === UP_ARROW){
   Matter.Body.applyForce( paper.paper , paper.paper.position , {x:50 , y:-88} );
  }
}


