
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(1200, 700);
 
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
paper = new Paper(100,300,10,10);
ground = new Ground(600,650,1200,20);

bin = new DustBin(1060,700,160,250);
rect2 = new Rect(1000,570,10,130);
rect1 = new Rect(1110,570,10,130);
	Engine.run(engine);
  
}


function draw() {
  
  background("black");
 // keyPressed();
//drawsprites();
paper.display();
 ground.display();
 rect1.display();
 rect2.display();
 bin.display();
}

function keyPressed(){
   if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:250, y :-300})
    } 
};
