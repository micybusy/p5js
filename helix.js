let x, y, z, t, r, h;
function setup(){
    createCanvas(innerWidth-20, innerHeight-20)
    x = 0; y = 0; z = 0; t = 200; r = 200; h = 500;
}


function draw(){
    // TODO: Add Z rotation to the helix to see the depth of it. 
    x = r*Math.cos(t) + 500;
    y = r*Math.sin(t) + 500;
    z = h*t + 500;
    point(x, y, z)
    t += 0.01
}
