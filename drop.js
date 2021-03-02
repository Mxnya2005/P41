class Drop{
    constructor(x,y){
        var Options={
            friction: 0.001,
            restitution: 0.1
        }
        this.drop= Bodies.circle(x,y,5,Options)
        this.radius= 5
        World.add(world,this.drop)
    }
    updateDrop(){
        if(this.drop.position.y>height){
            Matter.Body.setPosition(this.drop,{x:random(0,400),y:random(0,400)})
        }
    }
    display(){
        fill("blue")
        ellipseMode(CENTER)
        ellipse(this.drop.position.x,this.drop.position.y,this.radius,this.radius)
    }
}