
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	bob1=new Bob(500,645,50)
	bob2=new Bob(600,645,50)
	bob3=new Bob(700,645,50)
	bob4=new Bob(800,645,50)
	bob5=new Bob(900,645,50)
	roof=new Roof(700,60,800,30)
	rope1=new Rope(bob3.body,roof.body,0,0)
	rope2=new Rope(bob2.body,roof.body,-100,0)
	rope3=new Rope(bob4.body,roof.body,+100,0)
	rope4=new Rope(bob1.body,roof.body,-200,0)
	rope5=new Rope(bob5.body,roof.body,+200,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===DOWN_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-150,y:-100})
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:150,y:100})
	}
}