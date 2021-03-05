
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, cpaper
var world, cpaperImg;

function preload(){
  cpaperImg = loadImage("paper.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    cpaper = new paper(200,200,50,50);
    World.add(world, cpaper);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  if(keyDown("right_arrow")){
	  cpaper.velocityX = 5;
  }

  groundObject.display();
  dustbinObj.display();
  cpaper.display();
  drawSprites();
}

