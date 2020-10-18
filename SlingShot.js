class Slingshot {
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.06,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.sling);

    }
    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke(48,22,8);
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}