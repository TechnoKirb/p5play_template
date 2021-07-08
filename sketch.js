var box;
var b1
var b2
var r,g,b
r=0
g=0
b=255
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  b1 = createButton('Red')
  b1.position(50,150)
  b1.mousePressed(red_bg)
  b2 = createButton('Green')
  b2.position(150,150)
  b2.mousePressed(green_bg)
}
function red_bg(){
  r=255
  g=0
  b=0
}
function green_bg(){
  r=0
  g=255
  b=0
}
function draw() 
{
  background(r,g,b);
  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
  }

  drawSprites();
}




