var trex,trex_running,trex_collided;
var ground,invisible_ground,ground2;
var cloud1;
var cloudsgroup;
var o1,o2,o3,o4,o5,o6,obstaclegroup;
var count = 0;

function preload(){
 trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
 trex_collided = loadAnimation("trex_collided.png");
 ground2 = loadImage("ground2.png");
 cloud1 = loadImage("cloud.png"); 
 o1 = loadImage("obstacle1.png");
 o2 = loadImage("obstacle2.png");
 o3 = loadImage("obstacle3.png");              
 o4 = loadImage("obstacle4.png");
 o5 = loadImage("obstacle5.png");
 o6 = loadImage("obstacle6.png");
}
function setup() {
  createCanvas(600, 200);
  trex = createSprite(50,180,20,50);
  trex.addAnimation("run",trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,600,20);
  ground.addImage("ground",ground2);
  ground.velocityX = -6;
  ground.x = ground.width/2;
  
  invisible_ground = createSprite(200,190,600,5);
  invisible_ground.visible = false;
  
  cloudsgroup = new Group();
  obstaclegroup = new Group();
}

function draw() {
  background(150);
  count = count +Math.round(getFrameRate()/60);
  fill("black"); 
  text("Score: "+ count, 50, 50);
  
  trex.collide(invisible_ground);
  if(keyDown("space") && trex.y >= 162){
  trex.velocityY = -12;
  }
  trex.velocityY = trex.velocityY + 0.8; 
  
  if (ground.x < 0){
       ground.x = ground.width/2;
       }
  console.log(trex.y);
  spawnObstacles();
  spawnclouds();
  drawSprites ();
}

function spawnclouds(){
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,10,40,10);
    cloud.y = Math.round(random(70,120));
    cloud.addImage("cloud",cloud1);
    cloud.scale = 0.75;
    cloud.velocityX = -3;
    cloud.lifetime = 200;
    cloudsgroup.add(cloud);
    
}}
function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -6;
    
    
    var rand = Math.round(random(1,6));
    switch(rand){
      case 1:obstacle.addImage("obstacle",o1);
             break;        
      case 2:obstacle.addImage("obstacle",o2);
             break;
      case 3:obstacle.addImage("obstacle",o3);
             break;
      case 4:obstacle.addImage("obstacle",o4);
             break;
      case 5:obstacle.addImage("obstacle",o5);
             break;
      case 6:obstacle.addImage("obstacle",o6);
             break;
             default: break;       
    }
    
             
    obstacle.scale = 0.5;
    obstacle.lifetime = 100;
    obstaclegroup.add(obstacle);
  }
}