var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleIm;
var leaf,leafIm;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleIm = loadImage("apple.png");
  leafIm = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
    
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
  }

  function SpawnApple(){
  
    apple = createSprite(200,20,10,10);
    apple.scale = 0.05
    apple.addImage(appleIm);
    apple.depth = rabbit.depth;
    apple.depth+=1;
    apple.velocityY = 3;
    apple.x = Math.round(random(20,380));
    
  }
  
  function SpawnLeaf(){
    
      leaf = createSprite(200,20,10,10);
      leaf.scale = 0.05
      leaf.addImage(leafIm);
      leaf.depth = rabbit.depth;
      leaf.depth+=1;
      leaf.velocityY = 3;
      leaf.x = Math.round(random(20,380));
  
  }

function draw() {
  background(0);
  edges= createEdgeSprites();
  rabbit.collide(edges);
  if(keyDown("left")){
    rabbit.x = rabbit.x - 4
  }
  if(keyDown("right")){
    rabbit.x = rabbit.x +4
  }
  var select = Math.round(random(1,2))
  //console.log(select);
  if(select===1){
    if(frameCount%80===0)
    SpawnApple();
  }
  if(select===2){
    if(frameCount%80===0){
    SpawnLeaf();
    }
  }
  drawSprites();

  }
  




