class Cell {
    constructor(cntx, cnty, radius){
        this.cntx = cntx;
        this.cnty = cnty;
        this.radius = radius;
        this.isDivided = false;
    }

    mouseInside(){
        if ((mouseX**2 + mouseY**2) <= this.radius**2){
            if(!this.isDivided){
                this.divide();
            }
        }
    }

    
    show() {
        circle(this.cntx, this.cnty, this.radius)
    }

    divide(){
        this.isDivided = true;
        this.cl1 = new Cell(this.cntx-this.radius/2, this.cnty-this.radius/2, this.radius/2)
        this.cl2 = new Cell(this.cntx+this.radius/2, this.cnty-this.radius/2, this.radius/2) 
        this.cl3 = new Cell(this.cntx-this.radius/2, this.cnty+this.radius/2, this.radius/2)
        this.cl4 = new Cell(this.cntx+this.radius/2, this.cnty+this.radius/2, this.radius/2)
        background(0)
        this.cl1.show()
        this.cl2.show()
        this.cl3.show()
        this.cl4.show()
    }

}


// TODO: Add a Cell class that recursively divides itself when the mouse is on top of it.

let r = 800;
let cell = new Cell(0,0,r)

function setup(){
    createCanvas(innerWidth-20, innerHeight-20)
    background(0)
    
}


function draw() {
    fill(255)
    translate(width/2, height/2)
    cell.show();
    cell.mouseInside();
    }




