function Rex(){this.size=75,this.y=height-this.size/2,this.x=250,this.velocity=0,this.gravity=1,this.lift=-25,this.show=function(){fill(255),ellipse(this.x,this.y,this.size,this.size)},this.update=function(){this.velocity+=this.gravity,this.y+=this.velocity,this.y>height-this.size/2&&(this.y=height-this.size/2,this.velocity=0),this.y<this.size/2&&(this.y=this.size/2,this.velocity=0)},this.jump=function(){this.y==height-this.size/2&&(this.velocity+=this.lift)}}
var rex,spikes=[],spikesGap=60;function setup(){createCanvas(1500,700),rex=new Rex,spikes.push(new Spike)}function draw(){background(0);for(var e=spikes.length-1;e>=0;e--)spikes[e].show(),spikes[e].update(),spikes[e].hits2(rex),spikes[e].offScreen()&&spikes.splice(e,1);rex.update(),rex.show(),frameCount%spikesGap==0&&spikes.push(new Spike)}function keyPressed(){32==keyCode&&rex.jump()}
function Spike(){this.y=height,this.w=50,this.x=width,this.speed=8,this.highlight=!1,this.show=function(){fill(255),this.highlight&&fill(255,0,0),triangle(this.x-this.w,this.y,this.x,this.y-this.w,this.x+this.w,this.y)},this.update=function(){this.x-=this.speed},this.offScreen=function(){return this.x<=0},this.hits=function(i){return(i.x+i.size>this.x||i.x-i.size>this.x)&&(i.x+i.size<this.x-this.w||i.x-i.size<this.x-this.w)&&i.y+i.size>this.y&&(this.highlight=!0,!0)},this.hits2=function(i){return Math.hypot(this.x-i.x,this.y-i.y)<=this.w+i.size/2&&(this.highlight=!0,!0)}}