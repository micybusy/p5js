let x = 0;
let y = 0;
let width;
let height;
let t, sparkx, sparky, spark_vertex, draw_spark;
let ellipse_width = 200;
let ellipse_height = 800;
function setup(){
    createCanvas(innerWidth-20, innerHeight-20);
    width  = innerWidth-20;
    height = innerHeight-20;
}


function draw(){
    background(0)
    translate(width/2, height-150)
    flame()
    draw_spark = Math.floor(random(100))
    draw_spark = draw_spark%13 == 0
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
    ellipse_width = random(195, 205);
    ellipse_height = random(795, 805)
    let g = drawingContext.createLinearGradient(x,y, x+ellipse_width,y+ellipse_height);
    let c1 = color(225, 119, 0);
    let c2 = color(94,186,201);
    let c3 = color(254, 222, 23);
    g.addColorStop(0,   c3.toString());
    g.addColorStop(0.1,   c1.toString());
    g.addColorStop(0.2, c2.toString());
    g.addColorStop(0.3,   c1.toString());
    
    drawingContext.fillStyle = g;

    beginShape();
    ellipse(x, y, ellipse_width, ellipse_height)
    endShape(CLOSE);

    x+=random(-1, 1)
    y+=random(-5, 5)

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