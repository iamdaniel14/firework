
class Particles {
constructor (mass,x,y,sat,firework){
  this.pos= createVector (x,y);
  this.acc=createVector (0,0);
  this.sat=sat;
  this.firework=firework;
  this.alpha=255;
  this.mass=mass;
  this.r=sqrt (this.mass)*4;
  
  if (firework) {
    this.vel=createVector (0, random(-10,-2))
    
  } else {
  this.vel=p5.Vector.random2D();
  this.vel.mult (random(2,4));

  }

  }
  
   drag_force (){
  let drag=this.vel.copy();
  drag.normalize ();
  drag.mult(-1);
    
  let c =0.01; 
  let speed=this.vel.mag();
     
  drag.setMag (c*speed*speed);
  this.applyForce (drag);
    
    
  }
  
  applyForce (force){
  let f =p5.Vector.div(force,this.mass);
  this.acc.add (f);
  }
  show (){
    if (this.firework) {
          fill (255,this.sat,100)

    } else { 
    
    fill (red,this.sat,100,this.alpha)
}
    circle (this.pos.x,this.pos.y,this.r);

  }
  
  
  update (){
    
  if (!this.firework) {  
  this.alpha-=1.5; //changing the alpha value of the particles
      }
  this.pos.add (this.vel) ;
  this.vel.add (this.acc);
  this.acc.set (0,0)
    
  }
 
  
  
  finished () {
     
  if (this.alpha<0) { 
    return true;
      
  }
    
  }
  
  friction_force () {
    
  let force=this.vel.copy();
    
  force.normalize ();
  force.mult(-1);
  let  normal_force=this.mass;
  let mu=0.97;
  force.setMag (mu*normal_force);
  this.applyForce (force)
  }
  
  
}