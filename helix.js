let x, y, z, t, r, h;
function setup(){
    createCanvas(innerWidth-20, innerHeight-20, WEBGL)
    x = 0; y = 0; z = 0; t = 0; r = 300; h = 10;
    background(0)
}


function draw(){
    z = r*Math.cos(t);
    x = r*Math.sin(t);
    y = h*t -250
    stroke(255) 
    strokeWeight(5)
    point(x, y, z)
    t += 0.01
}
