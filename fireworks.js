class Fireworks {
  constructor (x,y,sat){
  this.pos=createVector (x,y)
  this.particles=[];
  this.saturation =sat;
  this.mass=random (1,4);
  this.firework=new Particles (this.mass,x,y,sat,true);
  this.exploded =false;
    
  }
  

  update (){
  if(!this.exploded) {  //if not exploded updating the firework ;
  let gravity=createVector (0,0.1);  
  this.firework.applyForce (gravity);
  this.firework.update();
   
    
  if (this.firework.vel.y>=0){  // if the velocity is less or equal to zero the exploded is equal to true then calling the explode function
     this.exploded=true;
    this.explode ();
    }
  }
    
  for (let i=this.particles.length-1; i>0; i--){
  this.particles[i].update();
  let gravity=createVector (0,0.1);
  this.particles[i].applyForce(gravity);
   this.particles[i].drag_force ();
  if (this.particles[i].finished()){
  this.particles.splice (i,1);
   
  }
  
  }
  
  
  }
    
   show (){
  if (!this.exploded) {
  this.firework.show ();
  } 
  for (let i=this.particles.length-1; i>0; i--){
  this.particles[i].show ();
  
    }
 
  
  }
  
  explode (){
  for (let i=0; i<numberOfParticles; i++){ 
  if (random(1) <0.1) { 
   this.particles.push(new Particles(this.mass,this.firework.pos.x,this.firework.pos.y,this.saturation));

   }else {
   this.particles.push(new smallParticles(this.mass,this.firework.pos.x,this.firework.pos.y,this.saturation));
                 }
    }
    
  }
  

}