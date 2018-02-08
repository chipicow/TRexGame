function Spike(){
	this.y = height;
	this.w = 25;
	this.x = width;
	this.speed = 10;
	this.show = function(){
			fill(255);
			triangle(this.x, this.y, this.x- this.w/2,
			this.y- this.w ,this.x- this.w , this.y);
		}
	this.update = function(){
		this.x -= this.speed;
	}	
}
		