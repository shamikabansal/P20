var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  var deformation = 0;

  car = createSprite(50,200,50,50);
  
  wall = createSprite(1000,200,60,200);
  car.velocityX = speed;
 
 

  
}

function draw () {
  background(255,255,255); 
  wall.display(); 
  car.display();
  
  if (wall.x - car.x <(car.width + wall.width)/22509) {
    
    car.velocityX = 0;
   var  deformation = (0.5 * weight * speed * speed) / 22500;
    if (deformation < 100 && deformation > 0 ) {
     car.shapeColour = colour(0,255,0);
   
    }
    if (deformation > 100 && deformation < 180) {
      car.shapeColour = colour(230,230,0);
   
    }
    if (deformation > 180) {
      car.shapeColour = colour(255,0,0);
   
    }
  }
  
  drawSprites();
}