var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	packageSprite = createSprite(width/2, 200, 10, 10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;

	helicopterSprite = createSprite(width/2, 200, 50, 50);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.5;

	rect1Sprite = createSprite(width/2, 630, 140, 10);

	rect2Sprite = createSprite(width/2 - 70, 580, 10, 100);

	rect3Sprite = createSprite(width/2 + 70, 580, 10, 100);

	packageBody = Bodies.circle(width/2 , 200 , 50 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	
    state = "play"
     
	//Create a Ground
	 ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if (state === "start") {
	text("drop the package by pressing down arrow", 300, 350);
 }

 if (state === "done") {
   text("!!package supplied successfully!!", 300, 350);
   text("!!Now get out of here using right and left arrow keys!!", 300, 370);

   if(keyCode === RIGHT_ARROW) {
	 helicopterSprite.velocityX = 10;
   }

   if(keyCode === LEFT_ARROW) {
	   helicopterSprite.velocityX = -10;
	 }

   if((helicopterSprite.x > 405)||(helicopterSprite.x < 395)) {
	 state = "celebrate";
	 }
}

if (state === "celebrate") {
   text("you have done well", 300, 350);
}

  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	state = "done"
  }
}



