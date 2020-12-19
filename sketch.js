//declaring the variables
var car,wall;
var speed,weight;

function setup() {

//creating the canvas   
createCanvas(windowWidth,windowHeight);

//setting the speed and weight to random number  
speed  = random(55,90);
weight = random(400,1500)

//creating the car and wall sprite  
car = createSprite(50, 280, 50, 50);
wall = createSprite(1400,300,60,height/2);

//making the car move 
car.velocityX = speed;

car.depth = wall.depth;
car.depth = car.depth+1;

}


function draw() {

//setting the background color   
background(0,0,0);  

if(wall.x - car.x < (wall.width + car.width)/2)
{
 car.velocityX = 0;

 var deformation = 0.5*weight*speed*speed/22500;
 if(deformation > 180)
 {
    car.shapeColor = color(255,0,0);
 }

 if(deformation < 180 && deformation > 100)
 {
    car.shapeColor = color(230,230,0);
 }

 if(deformation < 100)
 {
    car.shapeColor = color(0,255,0);
 }

}

 drawSprites();

}