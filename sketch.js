var fixedrect
var movingreact
var fixedrect2;

function setup() {
  createCanvas(800,400);
 fixedrect=createSprite(400,200,50,100);
 fixedrect.shapeColor="red"
 fixedrect.debug=true
  movingreact=createSprite(200,200,50,100);
  movingreact.shapeColor="blue"
  movingreact.debug=true
  fixedrect2=createSprite(200,200,50,100);
  fixedrect2.shapeColor="yellow";
  fixedrect2.debug=true;

}

function draw() {
  background(0);
  movingreact.x=mouseX;
  movingreact.y=mouseY;
 
  drawSprites();
 if( isTouching(movingreact,fixedrect)){
  movingreact.shapeColor="green"
  fixedrect.shapeColor="green"
 }
 else if(isTouching(movingreact,fixedrect2)){
  movingreact.shapeColor="green"
  fixedrect2.shapeColor="green"
 }
 else{
  movingreact.shapeColor="blue"
  fixedrect.shapeColor="red";
  fixedrect2.shapeColor="yellow";
 }
}

