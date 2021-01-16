class Ground{

    constructor (x , y , width , height) {
        
        var Ground_props = {
          isStatic : true,
         friction : 0.5 , 
         density : 1
           }
    
        this.ball = Bodies.rectangle(  x , y , width , height ,  Ground_props)
      World.add(aiWorld , this.ball);
    
       this.width = width;
    this.height = height;
    }  
    
       display() {
        rectMode(CENTER);
        fill("black");
      rect(this.ball.position.x , this.ball.position.y , this.width  , this.height)
    
       }
    }
    
