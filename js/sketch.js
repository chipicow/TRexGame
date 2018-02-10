var rex;
var spikes = [];
var spikesGap = 60;

function setup() { 
  createCanvas(1500, 700);
  rex = new Rex();
  spikes.push(new Spike(1));
} 

function draw() { 
  background(0);
 
  for(var i = spikes.length-1;i >= 0;i--){
	  spikes[i].show();
	  spikes[i].update();
	  
	  if(spikes[i].hits(rex)){
	  }
	  
	  if(spikes[i].offScreen()){
		  spikes.splice(i,1);
	  }  
  } 
   
  rex.update();
  rex.show();
  
  if(frameCount % spikesGap == 0){
	  var amountSpikes = this.getRandomInt(1,7);
	  for(var j = 0; j < amountSpikes ; j++){
		spikes.push(new Spike(j));
	  }
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function keyPressed(){
	if(keyCode == 32 ){
		rex.jump();
	}
}