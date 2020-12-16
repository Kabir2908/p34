//Create variables here
var dog,happyDog,database,foodS,foodStock;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png")
  dogHappyImg = loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog = createSprite(250,250);
  dog.addImage(dogImg);
  dog.scale = 0.25;
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(foodS!==undefined){
  if(keyWentDown(UP_ARROW)){
    writeStock(20);
    dog.addImage(dogHappyImg);
  }
}

  drawSprites();
  //add styles here
  textSize(20);
  text("Remaining Milk: "+foodS,150,380)
  text("Note: Press Up Arrow Key to feed Tom Milk",100,350);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    food:x
  })
}


