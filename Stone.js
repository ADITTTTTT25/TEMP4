class Stone {

    constructor(x,y,radius){
        var options={
            'restitution':0.04,
            'friction':1,
            'density':1.2
        }

        this.r = radius;
        
        this.body = Bodies.circle(x,y,this.r,options);
        this.image = loadImage("Images/stone.png");
        World.add(world,this.body);
       
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r);

        // rectMode(CENTER);
        // rect(pos.x,pos.y,this.w,this.h);
    }
}