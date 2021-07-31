function preload() {
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation ("images/brush.png");
  gym = loadAnimation("images/gym21.png","images/gym22.png");
  eat = loadAnimation("add image urls here");
  drink = loadAnimation("add image urls here");
  move = loadAnimation ("add image urls here");
}





function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
}





  drawSprites();






}