
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var tree,ground,stone;
var boyImage, treeImage;
var sling;

function preload()
{
   boyImage = loadImage("sprites/boy.png");
   treeImage = loadImage("sprites/tree.png")
}

function setup()
 {
	createCanvas(1200, 620);

    engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,600,1200,20);
	stone = new Stone(110,440,40,40);
	sling = new Catapult(stone.body,{x:110, y:440});
	mango1 = new Mango(950,260,60,60);
	mango2 = new Mango(850,310,60,60);
	mango3 = new Mango(1050,260,60,60);
	mango4 = new Mango(900,200,60,60);
	mango5 = new Mango(1000,160,60,60);
}


function draw() 
{
  background(255);
  Engine.update(engine);
  ground.display(); 
  image(boyImage,50,355,300,300);
  image(treeImage,700,100,500,500);
  stone.display();
  sling.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
}

function mouseDragged()
{
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased()
{
    sling.fly();
}

function detectCollision(object1,object2)
{
   object1Position = object1.body.position;
   object2Position = object2.body.position;

   if(Math.abs(object1Position.x - object2Position.x)<= object1.width/2 + object2.width/2 &&
	  Math.abs(object1Position.y - object2Position.y)<= object1.height/2 + object2.height/2)
	  {
		  Matter.Body.setStatic(object2.body,false);
	  }
}

function keyPressed()
{
	if(keyCode == 32)
	{
		Matter.Body.setPosition(stone.body,{x: 110, y: 440});
		sling = new Catapult(stone.body,{x:110, y:440});
	}
}


