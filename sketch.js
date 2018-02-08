var rex;
function setup() { 
  createCanvas(1535, 720);
  rex = new Rex();
} 

function draw() { 
  background(0);
  rex.update();
  rex.show();
}

function keyPressed(){
	if(key = ' '){
		rex.jump();
	}
}