const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var backgroundIMG;



function preload() {
  towerImage = loadImage("./assets/tower.png");
backgroundIMG=loadImage("./assets/background.gif")
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
angle=-PI/4
cannon=new Canonn(190,130,70,50,angle)
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  

}

function draw() {
  background(189);
  image(backgroundIMG,0,0,width,height)
  Engine.update(engine);

  ground.display();
  
  tower.display();
  cannon.display()
 
}
