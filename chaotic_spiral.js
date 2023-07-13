let start, stop, r, colors, randix;
function setup(){
    createCanvas(innerWidth-20, innerHeight-20)
    background(0)
    start = 0;
    stop = 0.01;
    r = 20;
    colors = [[162,171,159], [93,98,89], [119,140,116], [45,48,42], [57,71,56], [116,124,132], [132,116,109], [56,60,68]]
}

function draw(){
    translate(.5*(innerWidth-20), .5*(innerHeight-20))
    randix = floor(random(0, 7))
    print(randix)
    print(colors[randix])
    stroke(colors[randix])
    strokeWeight(4)
    noFill()
    arc(0, 0, r, r, start, stop,  OPEN)
    start = stop
    stop += 0.01
    r += 0.1
    r += random(-0.1*r, 0.1*r)
}