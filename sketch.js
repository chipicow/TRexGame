var rex;
var spikes = [];

function setup() { 
  createCanvas(1535, 720);
  rex = new Rex();
  spikes.push(new Spike());
} 

function draw() { 
  background(0);
  rex.update();
  rex.show();
  
  for(var i = 0;i < spikes.length;i++){
	  spikes[i].show();
	  spikes[i].update();
  } 
  
}

function keyPressed(){
	if(key = ' '){
		rex.jump();
	}
}