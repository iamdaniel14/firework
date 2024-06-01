
let fireworks=[];
let canvas;
const NUMBER_OF_PARTICLES_INPUT=document.querySelector ("#numberOfParticle");
const SUBMIT=document.querySelector ("#submit");
let background_color=document.querySelector (".backgroundColor");


let numberOfParticles=50;
let r=0;
let g=0;
let b=0;



SUBMIT.addEventListener ("click", ()=>{
console.log (background_color.value);
let background_color_value=background_color.value;
 r=parseInt(background_color_value.substr(1,2),16);
 g=parseInt(background_color_value.substr(3,2),16);
 b=parseInt(background_color_value.substr(5,2),16);

console.log (b);
if(NUMBER_OF_PARTICLES_INPUT.value) {  
console.log (NUMBER_OF_PARTICLES_INPUT.value);
numberOfParticles=NUMBER_OF_PARTICLES_INPUT.value;

}
})

function setup() {
canvas=createCanvas(windowWidth,windowHeight);
canvas.parent ("canvas-container");
}



function draw() {
  background(r,g,b,25);
  
  noStroke ();
  
  if (random (1)< 0.01) {
  let sat=floor(random (255));
  fireworks.push(new Fireworks(random(width),height,sat));

  
  }

  
  for (let i=0; i<fireworks.length; i++) {
   fireworks[i].update ();
  fireworks[i].show ();
  }
  
}
