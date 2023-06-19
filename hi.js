let x, y, hit_low_right, hit_up_left, x_factor, y_factor;
function setup() {
    createCanvas(window.innerWidth-20, window.innerHeight-20);
    x = width/2;
    y = height/2;
    hit_low_right = false
    hit_up_left = false
    x_factor=random(5, 40)
    y_factor=random(5, 40)

}

  function draw() {
    background(255)
    fill(120, 120, 120)
    circle(x, y, 100)
    x += x_factor
    y += y_factor

    
    if (x >= width-50 ){
        x_factor *= -1;}
    else if (x<=50)
        {x_factor *= -1;
        }

    if (y >= height-50 ){
        y_factor *= -1;}
    else if (y<=50)
            {y_factor *= -1;
            }
    console.log(x)
    console.log(y)
    
}