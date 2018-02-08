function Rex(){
	this.y = height-75/2;
	this.x = 250;
	this.velocity = 0;
	this.gravity = 1;
	this.lift = -25;
	this.sizex = 75;
	this.sizey = 75;
	
	this.show = function(){
			fill(255);
			ellipse(this.x,this.y,this.sizex,this.sizey);
		}
		
	this.update = function(){
		this.velocity += this.gravity;
		this.y += this.velocity;
		
		if(this.y > height- this.sizey/2){
			this.y = height - this.sizey/2;
			this.velocity = 0;
		}
		
		if(this.y < this.sizey/2){
			this.y = this.sizey/2;
			this.velocity = 0;
		}
	}
	
	this.jump = function(){
		if(this.y == height - this.sizey/2)
			this.velocity += this.lift;
		}
	
}