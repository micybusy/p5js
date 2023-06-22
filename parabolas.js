let dec_rate = 0, factor = 1;
function setup() {
    createCanvas(window.innerWidth-20, window.innerHeight-20);
    x = (width-20)/2
    y = (height-20)/2
  }

function draw(){
    ellipse(x, y, 1200-dec_rate, 1000-factor*dec_rate)
    dec_rate+=20
    if(dec_rate>1000){
        dec_rate=0
        factor*= -1
    }
    xyz
}