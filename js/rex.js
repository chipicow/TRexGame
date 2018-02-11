function Rex(){
	
	this.size = 75;
	this.y = height- this.size/2;
	this.x = 250;
	this.velocity = 0;
	this.gravity = 1;
	this.lift = -15;
	this.lives = 5;
	//this.image = img;
	
	this.show = function(){
			switch(this.lives) {
				case 5:
					fill(0,55,0);
				break;
				case 4:
					fill(0,200,0);
				break;
				case 3:
					fill(255,255,0);
				break;
				case 2:
					fill(255,140,0);
				break;
				case 1:
					fill(255,0,0);
				break;
				default:
					fill(255,0,0);
					//kill the circle
			}
			//imageMode(CENTER);
			//image(this.image,this.x,this.y);
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
		if(this.y >= (height - (this.size/2) - 10))
			this.velocity += this.lift;
		}	
}