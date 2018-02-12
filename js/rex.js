function Rex(img){
	this.size = 75;
	this.y = height- this.size/2;
	this.x = 250;
	this.velocity = 0;
	this.gravity = 1;
	this.lift = -15;
	this.lives = 5;
	this.imageToUse = img;
	
	this.show = function(){
		fill(0,200,0);
			switch(this.lives) {
				case 5:
					this.drawHpBar(5);
					fill(0,55,0);
				break;
				case 4:
					this.drawHpBar(4);
					fill(0,200,0);
				break;
				case 3:
					this.drawHpBar(3);
					fill(255,255,0);
				break;
				case 2:
					this.drawHpBar(2);
					fill(255,140,0);
				break;
				case 1:
					this.drawHpBar(1);
					fill(255,0,0);
				break;
				default:
					this.drawHpBar(0);
					fill(255,0,0);
					//kill the circle
			}
			imageMode(CENTER);
			image(this.imageToUse,this.x,this.y);

			//ellipse(this.x,this.y,this.size,this.size);
		}

	this.drawHpBar = function(lives){
		for(var i = 0 ; i<lives ; i++){
			rect(this.x-this.size/2 + 10*i ,this.y-(this.size/2)-30,10,10);
		}
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