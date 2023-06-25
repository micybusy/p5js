function setup(){
    createCanvas(innerWidth-20, innerHeight-20, WEBGL)
}

function draw(){
    background(0)
    rotateX(frameCount*0.01);
    rotateY(-frameCount*0.01);
    sphere(300)
    box(500, 500, 500, 3,3)

}