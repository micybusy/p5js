let x = 0;
let y = 0;
let width;
let height;
let t, sparkx, sparky, spark_vertex, draw_spark;
function setup(){
    createCanvas(innerWidth-20, innerHeight-20);
    width  = innerWidth-20;
    height = innerHeight-20;
    frameRate(30)
}


function draw(){
    background(0)
    translate(width/2, height-100)
    flame()
    draw_spark = Math.floor(random(100))
    draw_spark = draw_spark%5 == 0
    if (draw_spark){
    spark()
    }

}


function spark(){
    push();
    stroke(252, 222, 117);
    sparkx = random(-500,500);
    sparky = random(-500, 0);
    spark_vertex = random(5, 20)
    star(sparkx, sparky, 3, 7, spark_vertex)
    pop();
    
}

function flame(){
    push();
    // Gradient: https://editor.p5js.org/jeffThompson/sketches/ta7msUszJ
    // TODO: Implement it accordingly.
    let g = drawingContext.createLinearGradient(x,y, x+200,y+800);
    let c1 = color(225, 119, 0);
    let c2 = color(255,255,255);
    g.addColorStop(0,   c1.toString());
    g.addColorStop(0.5, c2.toString());
    g.addColorStop(1,   c1.toString());
    
    drawingContext.fillStyle = g;

    //fill(255, 119, 0)
    beginShape();
    ellipse(x, y, 200, 800)
    endShape(CLOSE);
    drawingContext.fillStyle = 'white';

    x+=random(-1, 1)
    y+=random(-10, 10)
    pop();
}

function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }