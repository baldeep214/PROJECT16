
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivaltime=0 

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey=createSprite(100,300,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1; 
  
  
  ground=createSprite(200,335,400,10)
  ground.velocityX=-5

  FoodGroup=new Group()
  obstacleGroup=new Group()
}


function draw() {
background("white");
  
  stroke("black")
  textSize(20) 
  fill("black")
  survivaltime=Math.ceil(frameCount/frameRate())
  text("Survival Time = "+ survivaltime ,100,50)
  
  
  console.log(monkey.y)
  if(keyDown("space") && monkey.y >= 299) {
      monkey.velocityY = -12;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 200){
      ground.x = ground.width/2;
    }
  monkey.collide(ground)
  food()
  obstacles()
  drawSprites();



}

function food() {
  
  if (frameCount % 80 === 0) {
    banana = createSprite(350,120,10,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    
    banana.lifetime = 200;
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    
    FoodGroup.add(banana);
  }

}

function obstacles() {
  
  if (frameCount % 300 === 0) {
    obstacle = createSprite(200,315,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     
    obstacle.lifetime = 200;
    
    
    
    
    obstacleGroup.add(obstacle);
  }
  
}


