
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var ground;
var stone;
var boy;
var rope;
var mango1,mango2,mango3,mango4,mango5;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  mango1 = new Mango(1100,100,20);
  mango2 = new Mango(1170,130,20);
  mango3 = new Mango(1010,140,20);
  mango4 = new Mango(1000,70,20);
  mango5 = new Mango(1000,230,20);
	tree = new Tree(1050,350,500,500);
	ground = new Ground(650,590,1300,20);
  stone = new Stone(630,500,100);
	boy = new Boy(700,500,200,300);
	rope = new Rope(stone.body,{x:636,y:430});
	
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  Engine.update(engine);
 
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  ground.display();
  boy.display();
  rope.display();
  stone.display();
  text(mouseX+" ," + mouseY,mouseX,mouseY);

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
 
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX,y: mouseY})
}

function mouseReleased(){
    rope.fly();
}

function detectCollision(lstone,lmango){

	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

	
	if(distance <= lmango.r+lstone.r){

		Matter.Body.setStatic(lmango.body,false);
	}
	
}