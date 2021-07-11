var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
var car; 
var bottomGrass1
function preload()
{
 
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  


 for (var i=0; i < 40; i++){
  cars = new Car(2);
  carGroup1.add(cars.spt);
}

for (var i=0; i < 40; i++){
  log = new Log(-2);
  logGroup1.add(log.spt);
}
 


}









function draw() {
  background("skyblue");
 
 
  for (i=0; i<6; i++){
    var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
  
  if (1%2===0){
    var road = createSprite(683,height-50-(i*400)-grassHeight,width,300)
  road.shapeColor = "black";
  }
  
  bottomGrass1.shapeColor = "grey";
  
  }
  
  
  
  for (i=1;i<logGroup1.lenght;i++){
    if(logGroup1[i].x<0){
      logGroup1[i].x=width;
    }
  }
    
  
  for (i=1;i<carGroup1.lenght;i++){
    if(carGroup1[i].x>0){
      carGroup1[i].x=width;
    }
  }
  
  


  drawSprites();
}

