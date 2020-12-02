class Box{
    constructor(x, y) {
      var options = {
        isStatic : true
      }
      this.x = x;
      this.y = y;
      this.dustbinWidth=200;
      this.dustbinHeight=220;
      this.wallthick=20;


      this.rightBody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2, this.wallthick, this.dustbinHeight, options);
      this.leftBody = Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2, this.wallthick, this.dustbinHeight, options);
      this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallthick,options);
      this.width = width;
      this.height = height;
      World.add(world,this.rightBody);
      World.add(world,this.leftBody);
      World.add(world,this.bottomBody);
      this.image=loadImage("Dustbin.png");
    }
    display(){
      var rightpos = this.rightBody.position;
      var leftpos = this.leftBody.position;
      var bottompos = this.bottomBody.position;

      push()
      translate(rightpos.x,rightpos.y);
      rectMode(CENTER);
      angleMode(RADIANS);
      rotate(-1*this.angle);
      pop()
      
      push()
      translate(leftpos.x,leftpos.y);
      rectMode(CENTER);
      angleMode(RADIANS);
      rotate(this.angle);
      pop()
      


     push();
      translate(bottompos.x,bottompos.y);
      angleMode(RADIANS);
      imageMode(CENTER);
      image(this.image, 0, -this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight);
      pop();
    }
}
