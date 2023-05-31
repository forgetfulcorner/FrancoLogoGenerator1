let space = 8.5;
let pixelX = 0.125;
let pixelY = 4;

let sizeX, sizeY;

let count = 0;

let randRot;

let speed = 3;

// DEFINED FROM 0 to 1. 0 BEING TOP OF THE CANVAS, 1 BEING BOTTOM OF CANVAS.
let runHeight = 0.50;
let start = 0.75;


// F SHAPE DEFINITION
let shapeArrayY = [0.25, 0.50, 0.75, 1.00];
let shapeArrayX = [0.50, 1.00, 0.50, 1.00];
let totalHeight;
let currentLayer = 0;


function setup() {
  
  // sizeX = int(random(20,40));
  // sizeY = int(random(20,40));
  sizeX = 40;
  sizeY = 40;
  
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  colorMode(HSB, 255)
  
  // background(255);
  
  randH = random(0, 255)
  randRot = random(-0.1, 1)
  // console.log(randRot)
  
  // background(randH * 0.4, 150, 220, 40);
  
  totalHeight = runHeight * height;
  
  for (let i = 0; i < shapeArrayY.length; i++) {
    shapeArrayY[i] = int(totalHeight * shapeArrayY[i]) + int(random(-5, 5));
  }
  
  for (let i = 0; i < shapeArrayX.length; i++) {
    shapeArrayX[i] = int(sizeX * shapeArrayX[i]);
  }
  
  console.log(shapeArrayY);
  console.log(shapeArrayX);
  
  
}

function draw() {
  
  if (count * speed > shapeArrayY[currentLayer]){
    currentLayer++
    console.log(currentLayer)
  }
  
  noStroke();

  translate(width * 0.5, start * height - count * speed);
  scale(1, 0.2);
  rotate(45 + count * 0.006 * randRot);
  
  for (let w = 0; w < sizeX ; w++){
    
    for (let h = 0; h < shapeArrayX[currentLayer] + int(random(-5, 5)); h++){
      
      let n1 = noise(w * frameCount * 0.0001, 0.1)
      let n2 = noise(0.1, h * frameCount * 0.0001)

      n1 = map(n1, 0, 1, -25, 25)
      n2 = map(n2, 0, 1, -25, 25);
      
      fill(randH + h * 0.4, 150, 220, 180);
      // fill(0);
      
      // fill(randH + h * 0.4, 150, 220, 140)
      
      push();
      translate((space * sizeX / 2) - (space * w), (space * sizeY / 2) - (space * h))
      rotate(-45)
      rect(n1, n2, pixelX , pixelY);
      pop();
      
    }
  }
  

  
  count++

  if (count * speed  > runHeight * height) {
    noLoop();
  }
  
  
}


function keyPressed() {
    if (keyCode == '83') {
        saveCanvas('img', 'png');
    };
}

