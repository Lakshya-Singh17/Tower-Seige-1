class Poly {
    constructor(x,y){
        var options = {
            'isStatic': false,
            'restitution': 0.5,
            'friction': 1.0,
            'density': 1.2
        }
        this.body = Bodies.circle(x,y,40,options);
        this.radius = 40;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        fill("red");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}