var seaImg , seaImg1 , sea;
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation(//list the name of png files that you want to load);
spriteName.addImage(seaImg);
}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
 if(sea.x < 0){
   sea.x = sea.width/2;
 }
}
drawSprite()