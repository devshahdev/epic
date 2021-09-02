const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerBase, playerBase, player, computer;


function setup() 
{
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   computerBase=new ComputerBase(250, 550, 160, 310);
   playerBase =new PlayerBase(1200, 550, 160, 310);
   player =new Player(1200, 350, 100, 200);
   computer =new Player(250, 350, 100, 200);
   

 }

function draw() 
{

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
computerBase.display();
playerBase.display();

   //display Player and computerplayer
player.display();
computer.display();

}
