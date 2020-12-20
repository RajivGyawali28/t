class Blockd{
    constructor(x,y,width,height){
        var options={
            isStatic:false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        World.add(world,this.body);
    }
    display(){
        console.log(this.body.speed);
        if(this.body.speed<3){
            var pos = this.body.position;
            push();
            rectMode(CENTER);
            fill(128,128,128);
            rect(pos.x, pos.y, this.width, this.height);
            pop();
            }
            else{
              World.remove(world,this.body)
              push();
              this.Visiblity = this.Visiblity-5;
              tint(255,this.Visibility);
              pop();
            }
    }
    score(){
        if(this.Visiblity<0 && this.Visiblity>-1005){
          score+=1;
        }
      }
};