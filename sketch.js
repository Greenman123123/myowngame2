var bg;
var turtle;

function preload() {
  bgImg = loadImage("bg.png")
  turtleImg = loadImage("turtle.png")
  can1Img = loadImage("can1.png")
  can2Img = loadImage("can2.png")
  can3Img = loadImage("can3.png")
  can4Img = loadImage("can4.png")
  can5Img = loadImage("can5.png")
  can6Img = loadImage("can6.png")
}
function setup() {
  createCanvas(600, 600);
  bg = createSprite(300, 300)
  bg.addImage(bgImg)
  bg.scale = 1.5

  turtle = createSprite(300, 525)
  turtle.addImage(turtleImg)
  turtle.scale = 0.4
  // make litter bounce off edges
  var can1 = createSprite(150, 400, 100, 20);
  can1.addImage(can1Img)
  can1.scale = 0.4
  var can2 = createSprite(425, 400, 20, 100);
  can2.addImage(can2Img)
  can2.scale = 0.4
  var can3 = createSprite(145, 250, 100, 20);
  can3.addImage(can3Img)
  can3.scale = 1.4
  var can4 = createSprite(425, 150, 20, 100);
  can4.addImage(can4Img)
  can4.scale = 1.3
  var can5 = createSprite(145, 140, 100, 20);
  can5.addImage(can5Img)
  can5.scale = 0.4
  var can6 = createSprite(425, 250, 100, 20);
  can6.addImage(can6Img)

}


function draw() {
  background(51);
  if (keyDown("up")) {
    turtle.y = turtle.y - 3
  }
  if (keyDown("down")) {
    turtle.y = turtle.y + 3
  }
  if (keyDown("left")) {
    turtle.x = turtle.x - 3
  }
  if (keyDown("right")) {
    turtle.x = turtle.x + 3
  }
  drawSprites()
}

