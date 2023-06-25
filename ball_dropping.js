let x, y, c, height, factor, a, yx = 0;
function setup(){
    createCanvas(innerWidth-20, innerHeight-20);
    height = innerHeight-200;
    a = height**.5;
    x = 0;
    c = 0;
    
}


function draw(){
    y = (yx-a)**2 + c
    background(0)
    fill(255)
    circle(3*x, y, 100)
    x+=1
    yx += 1
    console.log(c)
    if (y > height+c){
        c += 100;
        yx = 0;
        y = height-c;
        
    }

    

}