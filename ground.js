class Ground{
    constructor(x,y){
    
     var options ={
    
        isStatic: false,

    
    }
    this.body = Bodies.rectangle(x,y,50,50,options);
    this.weight = 100;
    this.height = 30;
    World.add(world,this.body);
    }
    display(){
    var pos = this.body.position;
    rectMode(CENTER);
    
    fill("white");
    rect(300, 700, this.width,this.height)
    
}
}