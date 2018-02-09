var collide = require('triangle-circle-collision');
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
			triangle(this.x, this.y, this.x- this.w/2,
			this.y- this.w ,this.x- this.w , this.y);
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
	
	this.hits = function(rex) {
		var triangle = [[this.x, this.y], [this.x- this.w/2,
		this.y- this.w ], [this.x- this.w , this.y]];
		var point = [rex.x,rex.y];
		var radius = rex.sizex;
		
		if(collide(triangle, point, radius)){
			this.highlight = true;	
			return true;
		}
		return false;
		
	}
}
		