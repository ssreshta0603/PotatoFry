class Paper{

    constructor(x,y){
var options = {
    isStatic : false,
    friction : 0.5,
    restitution : 0.3,
    density : 1.2
}

this.body = Bodies.circle(x,y,35,options);
//this.width = width;
//this.height= height;
this.image = loadImage("paper.png");
World.add(world,this.body);
    }

     display() {
         var pos = this.body.position;
        imageMode(RADIUS);       
        image(this.image,pos.x,pos.y,40,40);
    
      }
            
};

