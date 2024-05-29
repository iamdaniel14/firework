
let fireworks=[];
let canvas;
const NUMBER_OF_PARTICLES_INPUT=document.querySelector ("#numberOfParticle");
const SUBMIT=document.querySelector ("#submit");
let paragraph=document.querySelector (".paragraph");
let green_paragraph=document.querySelector(".green-paragraph");
const RED_INPUT=document.querySelector ("#red-value");
const GREEN_INPUT=document.querySelector ("#green-value");

let numberOfParticles=50;

let red=10;

GREEN_INPUT.addEventListener ("input", (event)=>{
  console.log (event.target.value);
  green_paragraph.innerHTML=event.target.value;
  });

RED_INPUT.addEventListener ("input", (event)=>{
paragraph.innerHTML=event.target.value;
});

SUBMIT.addEventListener ("click", ()=>{

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
  background(0,0,0,25);
  
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
