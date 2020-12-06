//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImg, happyDogImg;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(200, 200, 5, 5);
  dog.addImage(dogImg);
  dog.scale = 0.5;
}


function draw() {  
background(46, 139, 87);
dog.display();
  drawSprites();
  //add styles here

}



