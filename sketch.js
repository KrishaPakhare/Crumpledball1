var wall1 , wall2 , wall3;
var engine , world , paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
	wall1Body = Bodies.rectangle(650,400,200,20,{isStatic : true})
	World.add(world,wall1Body)
	wall1=createSprite(650,400,200,20);
	wall1.shapeColor=color("white");
	wall2Body = Bodies.rectangle(550,360,20,100,{isStatic : true})
	World.add(world,wall2Body)
	wall2=createSprite(550,360,20,100);
	wall2.shapeColor=color("white");
	wall3Body = Bodies.rectangle(750,360,20,100,{isStatic : true})
	World.add(world,wall3Body)
	wall3=createSprite(750,360,20,100);
	wall3.shapeColor=color("white");
	paper = new Paper (100,300,10);
	ground = Bodies.rectangle(width / 2 ,400,width ,10,
    {
		isStatic : true ,
	});
	Engine.run(engine);
   World.add(world,ground)
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  paper.display();

  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body , paper.body.position ,{
			x: 11,
			y: -12,
		});
	}
	if(paper.isTouching(wall1)){
		paper.isStatic = true;
	}
}



