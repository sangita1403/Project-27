class Roof {
    constructor(x,y,width,height){
        var g={
            isStatic:true
          }
          this.body=Bodies.rectangle(x,y,width,height,g);
          this.width=width
          this.height=height
          World.add(world,this.body);
    }
    display(){
         rectMode(CENTER);
         fill("yellow")
         rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}  