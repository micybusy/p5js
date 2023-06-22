let x = 0;
let width, height;
let increment = 0.01;
let factor = 50;
let xfact = 0;
function setup(){
    createCanvas(innerWidth-20, innerHeight-20)
    width = innerWidth-20;
    height = innerHeight-20;
    
}

function draw(){
    x+=increment
    for (let i = 0; i<4; i++){
    point(x*factor, (Math.sin(x)*factor*(2**i)+height/2))
    point(width-x*factor, (Math.sin(x)*factor*(2**i)+height/2))
    }

}