const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground
var particles=[];
var division=[];
var plinko=[];
var divisionHeight=300
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
ground=new Ground(790,240,480,20)
for(var k=0;k<=width;k=k+80){
division.push(new Division(k,height=divisionHeight/2,10,divisionHeight))
}
for (var j=40;j<=width;j=j+50){
  plinko.push(new Plinko(j,75))
}
for (var j=40;j<=width;j=j+50){
  plinko.push(new Plinko(j,175))
}
for (var j=40;j<=width;j=j+50){
  plinko.push(new Plinko(j,275))
}
for (var j=40;j<=width;j=j+50){
  plinko.push(new Plinko(j,375))
}
if(frameCount%90===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10))
}
for(var j=0;j<particles.length;j++){
  particles[j].display()
}k
for(var k=0;k<particles.length;k++){
  particles[k].display()
}
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display()
  drawSprites();
}