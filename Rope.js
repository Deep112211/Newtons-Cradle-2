class Rope{
    constructor(body1, body2, offsetX, offsetY){
         this.offsetX = offsetX;
         this.offsetY = offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            stiffness: 1,
            length: 100,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
       this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
       
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y + this.offsetY);
        
    }
    
}