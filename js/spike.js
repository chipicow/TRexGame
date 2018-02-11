function Spike(numberInSet){
	this.y = height;
	this.size = 50;
	this.x = width+(this.size*numberInSet);
	this.speed = 15;
	this.highlight = false;

	
	this.show = function(){
			fill(255);
			if(this.highlight){
				fill(255,0,0);
			}
			ellipse(this.x,this.y,this.size,this.size);
		}
	this.update = function(){
		this.x -= this.speed;
	}	
	
	this.offScreen = function(){
		if(this.x+this.size <= 0){
			return true;
		}
		return false;
	}
	
	//compare circle and poly
	this.hits2 = function(rex){

	}


	// compare between 2 circles
	this.hits = function(rex) {
		if(Math.hypot(this.x-rex.x, this.y-rex.y) <= ((this.size) + (rex.size/2))){
			if(!this.highlight){
				rex.size +=20
				rex.lives -= 1;
			}
			this.highlight = true;
			return true;
		}
		return false;
	}
}
		