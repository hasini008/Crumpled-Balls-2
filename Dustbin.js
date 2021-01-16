class Dustbin{

    constructor(){
    var dustbin_props = {
        isStatic:true,
        friction : 0.5 , 
        density : 1

      }  
      this.dustbin = Bodies.rectangle(  400 , 650 , 50 , 70 , dustbin_props)
        World.add(aiWorld , this.dustbin);
        this.Image = loadImage("dustBin.png");
    }
    display() {
          imageMode(CENTER);
          fill("violet");
        image( this.Image , this.dustbin.position.x , this.dustbin.position.y , 50 , 70)
            
         }
      
}
