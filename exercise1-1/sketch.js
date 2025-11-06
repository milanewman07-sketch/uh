class Star {
    x;
    y;

    constructor(x, y) {
        this.x = x
        this.y = y
    }

    draw() {
        fill(255, 234, 0);
        noStroke();
        triangle(this.x, this.y - 50, this.x - 20, this.y, this.x + 20, this.y);
        triangle(this.x - 50, this.y - 20, this.x, this.y - 20, this.x, this.y + 10);
        triangle(this.x + 50, this.y - 20, this.x, this.y - 20, this.x, this.y + 10);
        triangle(this.x - 20, this.y - 5, this.x, this.y + 10, this.x - 35, this.y + 30);
        triangle(this.x, this.y + 10, this.x + 20, this.y - 5, this.x + 35, this.y + 30);
    }

    fall(num) {
        this.y += num
    }

    shoot(num) {
        this.x += num
    }
}



function setup() {
    createCanvas(400, 400);

}

let myStar = new Star(200, 0)
let myStar2 = new Star(0, 200)


function draw() {
    background(0);
    myStar.draw()
    myStar.fall(2)
    myStar2.draw()
    myStar2.shoot(5)
}

/**
 * Draws a Star at the given coordinates.
 * @param {number} x 
 * @param {number} y 
 */