class Bob{
    constructor(x,y,radius){
        var r ={
            isStactic:false,
            restitution:1,
            friction:0,
            density:0.7,
        }
         this.body=Bodies.circle(x,y,radius,r);
         this.radius=radius;
         World.add(world,this.body);
    }
   display(){
            var position = this.body.position;
            push();
            translate(position.x,position.y);
            rotate(this.body.angle);
            fill("red")
            ellipseMode(RADIUS);
            ellipse(0,0,this.radius,this.radius);
            pop();
   }

}