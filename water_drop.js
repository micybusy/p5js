let width, height, x, y, i, alpha;

function setup() {
    createCanvas(window.innerWidth-20, window.innerHeight-20);
    width = innerWidth-20;
    height = innerHeight-20;
    x = random(width);
    y = random(height);
    i = 5;
    alpha = 40
  }

  function draw(){
    
    fill(100,100,100,alpha)
    stroke(1, 1)
    strokeWeight(.5)
    circle(x, y, i)
    i+=20
    alpha-=4
    if (i >= 200){
        x = random(width);
        y = random(height);
        i = 0
        alpha = 40;

    }
  }