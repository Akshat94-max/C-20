var Movingrect;
var Fixedrect;





function setup() {
  createCanvas(800,400);
  Movingrect = createSprite(400, 200, 50, 50);
  Fixedrect = createSprite(300,100,50,50);
}

function draw() {
  background(180);  
  drawSprites();
  Movingrect.x = mouseX;
  Movingrect.y = mouseY;

  console.log(Movingrect.x-Fixedrect.x);
  console.log(Movingrect.width/2 + Fixedrect.width/2);
  if(Movingrect.x-Fixedrect.x <Movingrect.width/2 + Fixedrect.width/2 &&
    Fixedrect.x-Movingrect.x <Movingrect.width/2 + Fixedrect.width/2 &&
    Movingrect.y-Fixedrect.y <Movingrect.width/2 + Fixedrect.width/2 &&
    Fixedrect.y-Movingrect.y <Movingrect.width/2 + Fixedrect.width/2){
    Movingrect.shapeColor="red";
    Fixedrect.shapeColor="red";
  }
  else
  {
    Movingrect.shapeColor="green";
    Fixedrect.shapeColor="green";
  }
}