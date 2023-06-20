let x1, x2, r, g, b, alpha, wh, start, stop, extra_canvas;
function setup() {
    createCanvas(window.innerWidth-20, window.innerHeight-20);
    x1 = width/2
    x2 = height/2
    wh = 100
    start = 0.1
    stop  = 0.2
  }

  function draw() {
    fill(r, g, b, alpha)
    arc(x1, x2, wh, wh, start, stop, PIE)
    start = stop
    stop+=0.1
    wh*=1.005
    
}

    function mousePressed(){
      r = random(255);
      g = random(255);
      b = random(255);
      alpha = random(255);
    }