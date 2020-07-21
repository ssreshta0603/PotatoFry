class DustBin{
    constructor(x,y){
        var options={
            isStatic : true
        }
    
    this.body = Bodies.rectangle(x,y,5,5,options);
   this.width = width;
    this.height = height;
    this.image = loadImage("dustbingreen.png")
    World.add(world, this.body);

    }
    display(){
        var pos = this.body.position;
     
       imageMode(CENTER)
      // fill("black");
      image(this.image,1060,560,160,200);
    }
};