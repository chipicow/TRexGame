var rex;
var spikes = [];
var spikesGap = 60;

function setup() { 
  createCanvas(1535, 720);
  var tiles = [1535*720];
  rex = new Rex();
  spikes.push(new Spike());
} 

function draw() { 
  background(0);
 
  for(var i = spikes.length-1;i >= 0;i--){
	  spikes[i].show();
	  spikes[i].update();
	  
	  if(spikes[i].hits(rex)){
		  console.log("hitou");
	  }
	  
	  if(spikes[i].offScreen()){
		  spikes.splice(i,1);
	  }
	  
  } 
   
  
  rex.update();
  rex.show();
  
  if(frameCount % spikesGap == 0){
	  spikes.push(new Spike());
  }
}

function keyPressed(){
	if(keyCode == 32 ){
		rex.jump();
	}
}