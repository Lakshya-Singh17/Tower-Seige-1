const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world

var ground,base1,base2,poly,slingshot;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var boxx1,boxx2,boxx3,boxx4,boxx5,boxx6;

var gameState = "start"

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  poly = new Poly(100,100)

  box1 = new box(250,200,40,40);
  box2 = new box(290,200,40,40);
  box3 = new box(330,200,40,40);
  box4 = new box(370,200,40,40);
  box5 = new box(410,200,40,40);
  box6 = new box(270,170,40,40);
  box7 = new box(310,170,40,40);
  box8 = new box(350,170,40,40);
  box9 = new box(390,170,40,40);
  box10 = new box(290,140,40,40);
  box11 = new box(330,140,40,40);
  box12 = new box(370,140,40,40);
  box13 = new box(310,110,40,40);
  box14 = new box(350,110,40,40);
  box15 = new box(330,80,40,40);

  boxx1 = new boxx(530,180,40,40);
  boxx2 = new boxx(570,180,40,40);
  boxx3 = new boxx(610,180,40,40);
  boxx4 = new boxx(650,180,40,40);
  boxx5 = new boxx(550,150,40,40);
  boxx6 = new boxx(590,150,40,40);
  boxx7 = new boxx(630,150,40,40);
  boxx8 = new boxx(570,120,40,40);
  boxx9 = new boxx(610,120,40,40);
  boxx10 = new boxx(590,90,40,40);

  base2 = new Ground(600,200,220,20)
  base1 = new Ground(340,270,250,20);
  ground = new Ground(400,390,800,20);

  slingshot = new Slingshot(poly.body,{x:100,y:200});
  //console.log(box1);
  
}

function draw() {
  background(180,180,180);
  mouseDragged();
  Engine.update(engine); 

  poly.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();

  boxx1.display();
  boxx2.display();
  boxx3.display();
  boxx4.display();
  boxx5.display();
  boxx6.display();
  boxx7.display();
  boxx8.display();
  boxx9.display();
  boxx10.display();

  ground.display();
  base1.display();
  base2.display();

  slingshot.display();
}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
  }
}
