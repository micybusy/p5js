let l, center, x2, y2, incr, incr2, l2, x3, y3;
function setup() {
    createCanvas(innerWidth-20, innerHeight-20);
    l = 400;
    center = .5*(innerWidth-20)
    x2 = center;
    incr = 10;
    incr2 = 6;
    x3 = center + l;
    l2 = l;
    y3 = l + l2;
}

function draw(){
    //background(255)
    y2 = (l**2 - (center - x2)**2)**.5
    line(center, 0, x2, y2)
    y3 = (l2**2 - (center - x3)**2)**.5 + l2
    line(x2, y2, x3, y3)
    x2 += incr;
    x3 += incr2;

    if (x2 > center + l || x2 < center -l){
        incr *= -1
    }
    else if (x3 > center + l2 || x3 < center - l){
        incr2 *= -1
    }

}


