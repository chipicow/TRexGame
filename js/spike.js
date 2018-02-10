function Spike(){
	this.y = height;
	this.w = 50;
	this.x = width;
	this.speed = 8;
	this.highlight = false;

	
	this.show = function(){
			fill(255);
			if(this.highlight){
				fill(255,0,0);
			}
			triangle(this.x-this.w, this.y, this.x,
			this.y- this.w ,this.x + this.w , this.y);
		}
	this.update = function(){
		this.x -= this.speed;
	}	
	
	this.offScreen = function(){
		if(this.x <= 0){
			return true;
		}
		return false;
	}
	
	// compare between 2 squares
	this.hits = function(rex) {
		if(((rex.x+rex.size) > this.x || (rex.x - rex.size) > this.x) &&
		((rex.x+rex.size) < (this.x - this.w) || (rex.x - rex.size) < (this.x - this.w)) &&
		((rex.y+rex.size) > this.y)){
			this.highlight = true;
			return true;
		}
		return false;
	}

	// compare between 2 circles
	this.hits2 = function(rex) {
		if(Math.hypot(this.x-rex.x, this.y-rex.y) <= (this.w + (rex.size/2))){
			this.highlight = true;
			return true;
		}
		return false;
	}
}
		