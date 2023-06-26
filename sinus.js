let x = 0;
let width, height;
let increment = 0.05;
let factor = 50;
let xfact = 0;
function setup(){
    createCanvas(innerWidth-20, innerHeight-20)
    width = innerWidth-20;
    height = innerHeight-20;
    background(0)    
}

function draw(){
    stroke(0, 255, 65)
    strokeWeight(20)
    x+=increment
    for (let i = 0; i<3; i++){
    point(x*factor, (Math.sin(x)*factor*(2**i)+height/2))
    point(width-x*factor, (Math.sin(x)*factor*(2**i)+height/2))
    }

}