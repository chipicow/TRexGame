function Rex(img){
	this.size = 90;
	this.y = height - this.size/2;
	this.x = 250;
	this.velocity = 0;
	this.gravity = 1;
	this.lift = -15;
	this.lives = 5;
	this.imageToUse = img;
	
	this.show = function(){
		fill(0,200,0);
		imageMode(CENTER);	
			switch(this.lives) {
				case 5:
					this.drawHpBar(5);
					image(this.imageToUse[0],this.x,this.y);
				break;
				case 4:
					this.drawHpBar(4);
					image(this.imageToUse[1],this.x,this.y);
				break;
				case 3:
					this.drawHpBar(3);
					image(this.imageToUse[2],this.x,this.y);
				break;
				case 2:
					this.drawHpBar(2);
					image(this.imageToUse[3],this.x,this.y);
				break;
				case 1:
					this.drawHpBar(1);
					image(this.imageToUse[4],this.x,this.y);
				break;
				case 0:
				this.drawHpBar(0);
					image(this.imageToUse[4],this.x,this.y);

			}
		}

	this.drawHpBar = function(lives){
		for(var i = 0 ; i<lives ; i++){
			rect(this.x-this.size/2 + 16*i ,this.y-(this.size/2)-30,13,10);
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