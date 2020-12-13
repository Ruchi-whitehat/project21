var bullet,wall;
var dg;
var sp, wt; 
var thickness;

function setup() {
  createCanvas(1600, 400);

	sp=Math.round(random(223,321));
	wt=Math.round(random(30,52));
	thickness = Math.round(random(22,83));

	bullet=createSprite(50, 200, 40,20);   
	bullet.velocityX = sp;
	bullet.shapeColor= "white";

  	wall=createSprite(1200,200, 50, height/2);
  	wall.shapeColor="grey";
}


function draw() {
  background("black");

  if(hasCollided(bullet,wall))  {

  	bullet.velocityX=0;
	dg = ((0.5*wt*sp*sp) / (thickness*thickness*thickness));
	  
	if(dg>10){
		bullet.shapeColor = "red";
	}
	else {
		bullet.shapeColor = "green";
	}
  }   
  drawSprites();
}

function hasCollided(b,w){
	bulletRightEdge = b.x + b.width;
	wallLeftEdge = w.x;
	if(bulletRightEdge >= wallLeftEdge){
		return true;
	}
	else{
		return false;
	}
}

