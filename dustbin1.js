class Dustbin1{
    constructor(x,y){
    
     var options ={
    
        isStatic: false,

    
    }
    this.body = Bodies.rectangle(x,y,50,50,options);
    this.weight = 300;
    this.height = 10;
    World.add(world,this.body);
    }
    display(){
    var pos = this.body.position;
    rectMode(CENTER);
    
    fill("pink");
    rect(600, 600, this.width,this.height)
    
}
}