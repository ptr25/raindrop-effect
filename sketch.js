const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var boxes = [];
var raindrop = [];
var Drop = [];

function setup() {
  createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
}

function draw() {
  background('#fae');
    boxes.push(new Boxes(random(10,790), random(0,390), random(1, 20),random(1,20)));
    raindrop.push(new Raindrop(random(10,790),random(0,390),random(1, 20)))
    Drop.push(new drop(random(10,790),random(0,390),random(1, 30)))

for (var i = 0; i < boxes.length; i++) {
  boxes[i].display();
  raindrop[i].display();
  Drop[i].display();
}
}