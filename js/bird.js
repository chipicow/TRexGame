function Bird(){
	this.spaceFromFloor = 300;
	this.y = height - this.spaceFromFloor;
	this.size = 50;
	this.x = width+200;
	this.speed = 15;
	this.highlight = false;
	this.hitting = false;

	this.show = function(){
			fill(255);
			if(this.highlight){
				fill(255,0,0);
			}
			rect(this.x,this.y,this.size,this.size);
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
	// compare between rectangle and circle
	this.hits = function(rex) {
		this.hitting = collideRectCircle(this.x,this.y,this.size,this.size,rex.x,rex.y,rex.size);
		if(this.hitting){
			if(!this.highlight){
				rex.size +=20;
				rex.lives -= 1;
			}
			this.highlight = true;
			return true;
		}
		return false;
	}
}
		