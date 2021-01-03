

function setup() {
  createCanvas(1000,1000);
  //createSprite(400, 200, 50, 50);
  
  angleMode(DEGREES);
  
}

function draw() {
  background("black");
  hr = hour();
  mn = minute();
  sc = second();

  
  
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,12,0,360);


  circle(500,550,850);

  //second
  push();
  translate(500,550);
  rotate(scAngle);
  stroke("yellow");
  strokeWeight(7);
  line(0,0,0,-400);
  pop();

  //minute hand

  push();
  translate(500,550);
  rotate(mnAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,0,-300);
  pop();

  //hour hand

  push();
  translate(500,550);
  rotate(hrAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,0,-200);
  pop();

 // console.log(sc,scAngle);
  
  drawSprites();
}