var bg
var ground
var boyimg
var boy
var zombie,zombie_img
var bullet
var bulletImg
var bulletGroup

function preload(){
  bg = loadImage("bg img.jpeg")
  boyimg = loadImage("boy.png")
  zombie_img = loadImage("zombie.png") 
  bulletImg = loadImage("bullet.png")
}

function setup() {

  createCanvas(windowWidth, windowHeight);
 ground = createSprite(width/2, height-10, windowWidth, 50);
 ground.visible = false
 boy = createSprite(120, height-120,20,50)
boy.addImage(boyimg)
boy.scale = 0.5
boy.velocityX = 6

zombie = createSprite(10,height-120,20,50)
zombie.addImage(zombie_img)
zombie.velocityX = 6.05

bulletGroup = new Group();
}

function draw() {
  background(bg);  
  if(boy.x>1200){
    boy.x = 120
    boy.velocityX = 8.3
  }
 if(zombie.x>1200){
   zombie.x = 20
   zombie.velocityX = 8.5
 }

if(keyDown("DOWN_ARROW")){
  bullet = createSprite(displayWidth-1000,boy.y-35,20,10)
  bullet.addImage(bulletImg)
  bullet.velocityX = 20
  bullet.scale = 0.2
  bulletGroup.add(bullet)
}

if(zombie.isTouching(bulletGroup)){
  zombie.destroy()
}


  drawSprites();
}



