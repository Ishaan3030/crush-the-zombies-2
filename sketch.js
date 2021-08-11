const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
let world;
let engine;
var bridge;
var ground;
var wall1, wall2;
var jointPoint;
var jointLink;
var zombie1, zombie2;
var zombie3, zombie4;
var zombie;
var stones = [];
var bg;

function preload(){
  zombie1 = loadImage("./assets/zombie.png");
  zombie2 = loadImage("./assets/zombie.png");

  zombie3 = loadImage("./assets/zombie.png");
  zombie4 = loadImage("./assets/zombie.png");

  bg = loadImage("./assets/background.png");
}

function setup() {
  createCanvas(2000,1000);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  zombie = createSprite(width/2, height - 110);
  zombie.addAnimation("lefttoright", zombie1, zombie2, zombie1);
  zombie.addAnimation("righttoleft", zombie3, zombie4, zombie3);
  zombie.scale = 0.1;
  zombie.velocityX = 10;

  breakButton = createButton("");
  breakButton.position(width - 200, height/2 - 50);
  breakButton.class("breakbutton");
  breakButton.mousePressed(handleButtonPress);
  
  ground = new Base(1000,900,2000,80);
  jointPoint = new Base(1000,350,20,20);
  wall1 = new Base(300, 380, 600, 90);
  wall2 = new Base(1700, 380, 1410, 90);
  bridge = new Bridge(13, {x:600, y:340});

  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);

  for (var i = 0; i <= 8; i++){
    var x = random(width/2 - 200, width/2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x,y, 80, 80);
    stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);

  ground.show();
  jointPoint.show();
  wall1.show();
  wall2.show();
  bridge.show();

}

function handleButtonPress(){
  jointLink.detach();
  setTimeout(() => {
    bridge.break();
  }, 1500);
}
