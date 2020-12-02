
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;
var ground;
function preload()
{

}

function setup() {
	createCanvas(800, 700);
  

	engine = Engine.create();
	world = engine.world;

	ground= new Ground(400,650,800,20);
	
	box1 = new Box(650,650);
	

	paper= new Paper(100,610,70);


	 

	//Create the Bodies Here.
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  drawSprites();

  paper.display();
  ground.display();

  box1.display();
 

  }
function keyPressed(){
	if(keyCode ===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:795,y:-795});
	}
}



