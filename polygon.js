class Polygon{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0,
			friction:1,
			density:1.2
        }
        this.x = x;
        this.y = y;
        this.radius = 50;
        this.image = loadImage("sprites/polygon.png");
        this.body = Bodies.circle(this.x,this.y,25,options);
        World.add(world,this.body);
    }
    display(){
        var polypos=this.body.position;		
		push()
		translate(polypos.x, polypos.y);
		imageMode(CENTER);
		image(this.image, 0,0,this.radius, this.radius)
		pop()
    }
}