var rex;
var spikes = [];
var spikesGap = 90;
var birds = [];
var score = 0;
var img;
var durationSpaceForBiggerJump = 0.2;
var output = document.getElementById('output'),
    pressed = {};

function preload(){
	img = loadImage('https://i.imgur.com/yHyeAw3.jpg');
}

function setup() { 
  createCanvas(1500, 700);
  rex = new Rex(img);
} 

function restart(){
	alert("You lose with this score: "+score +", try again?");
	birds = [];
	spikes = [];
	score = 0;
	setup();
}


function draw() {
	background(0);
	//spikes drawing
	for(var i = spikes.length-1;i >= 0;i--){
	 	spikes[i].show();
	 	spikes[i].update();
	  
		if(spikes[i].hits(rex)){
 			if(rex.lives <= 0){
  				restart();
  				return;
  			}
		}

		if(spikes[i].offScreen()){
			spikes.splice(i,1);
			score++;
	  	}  
  	} 
  	//birds drawing
  	for(var i = birds.length-1;i >= 0;i--){
	 	birds[i].show();
	 	birds[i].update();
	  
		if(birds[i].hits(rex)){
 			if(rex.lives <= 0){
  				restart();
  				return;
  			}
		}
		if(birds[i].offScreen()){
			birds.splice(i,1);
			score++;
	  	}  
  	} 
  
	rex.update();
 	rex.show();
  
  if(frameCount % spikesGap == 0){
	var amountSpikes = this.getRandomInt(1,13);
	if(amountSpikes < 7)
		birds.push(new Bird());
	for(var j = 0; j < amountSpikes ; j++){
		spikes.push(new Spike(j));
	  }
  }
}

//
function setSpikeGap (randomInt){
		if(randomInt<7){
			spikesGap = 60;
		}else{
			spikesGap = 80;
		}

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function makeRexJump(keyCode,duration){
	if(keyCode == 32 && rex.lives > 0 ){
		if(duration>durationSpaceForBiggerJump){
			rex.lift = -25;
		}
		rex.jump();
		rex.lift = -15;
		}
}

window.onkeydown = function(e) {
    if ( pressed[e.which] ) return;
    pressed[e.which] = e.timeStamp;
};
    
window.onkeyup = function(e) {
    if ( !pressed[e.which] ) return;
    var duration = ( e.timeStamp - pressed[e.which] ) / 1000;
    makeRexJump(e.which,duration);
    pressed[e.which] = 0;
};

