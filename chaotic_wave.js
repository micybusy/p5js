let x, y1, y2, tr;
function setup(){
    createCanvas(innerWidth-20, innerHeight-20)
    x = 0;
    y1 = 0;
    y2 = 0;
    tr = 0

}

function draw(){
    translate(0, .5*(innerHeight-20))
    y1 = y2;
    strokeWeight(2)
    x+=5
    y2 = 200*Math.sin(random(100)*x);
    for(i=0; i<4; i++){
    line(x, y1+i*50, x+5, y2+i*50)}


}