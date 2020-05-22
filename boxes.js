class Boxes{
    constructor(x,y,w,h){
        var options = {
            friction:0,
            restitution: 0.4
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w; 
        this.h = h; 
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill("blue");
      rect(pos.x, pos.y, this.r);
      }
    };