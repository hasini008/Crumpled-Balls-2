class Shelf{

    constructor(){
    var paper_props = {
        isStatic:false,
        restitution:0.8, 
        friction : 0.5 , 
        density : 1.2
      }  
      
      this.paper = Matter.Bodies.circle(  25 , 650 , 25 ,  paper_props)
      World.add(aiWorld ,this.paper );
      this.Image = loadImage("paper.png");
    }

    display() {
        imageMode(CENTER);
        fill("violet");
      image( this.Image , this.paper.position.x , this.paper.position.y , 50 , 50)

    }
}
