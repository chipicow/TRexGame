function Rex(){
	this.size = 75;
	this.y = height- this.size/2;
	this.x = 250;
	this.velocity = 0;
	this.gravity = 1;
	this.lift = -25;
	this.show = function(){
			fill(255);
			ellipse(this.x,this.y,this.size,this.size);
		}
		
	this.update = function(){
		this.velocity += this.gravity;
		this.y += this.velocity;
		
		if(this.y > height- this.size/2){
			this.y = height - this.size/2;
			this.velocity = 0;
		}		
		if(this.y < this.size/2){
			this.y = this.size/2;
			this.velocity = 0;
		}
	}
	
	this.jump = function(){
		if(this.y == height - this.size/2)
			this.velocity += this.lift;
		}	
}