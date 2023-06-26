let x = 0;
let increment = 0.1;
let x_plus = 5;
factor = 50;
factor2 = 300;
function setup(){
    createCanvas(innerWidth-20, innerHeight-20);
    background(0)
}

function draw(){

    stroke(255)
    strokeWeight(50)
    point(factor*x + x_plus, factor2*Math.sin(x) + .5*(innerHeight-20))
    x+=increment

}