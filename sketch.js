const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,300,70,70);
    box2 = new Box(750,300,70,70);
    box3 = new Box(750,200,70,70);
    box4 = new Box(900,200,70,70);
    box5 = new Box(826,100,70,70)
    ground = new Ground(500,height,1000,20)
    pig = new Pig(830,300)
    pig2 = new Pig(830,200)
    logs = new Logs(820,250,230,PI/2)
    logs2 = new Logs(820,150,230,PI/2)
    logs3 = new Logs(800,100,120,PI/7)
    logs4 = new Logs(870,100,120,-PI/7)
    bird = new Bird(100,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    pig2.display();
    logs.display();
    bird.display();
    box3.display();
    box4.display();
    logs2.display();
    box5.display();
    logs3.display();
    logs4.display();

}