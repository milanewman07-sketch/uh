class Coordinate {
    x;
    y;

    constructor(x, y) {
        this.x = x
        this.y = y
    }

    isInBounds(x1, y1, x2, y2) {
        if (x1 < this.x && this.x < x2 && y1< this.y && this.y < y2){
            return true
        } else {
            return false
        }
    }
}

function setup() {
    createCanvas(600, 600)
}

function draw() {

}

function mouseClicked() {
    let newcoord = new Coordinate(mouseX, mouseY)
    if (newcoord.isInBounds(0, 0, width, height)) {
        fill(random(255), random(255), random(255))
        ellipse(random(600), random(600), random(10, 100), random(10, 100),)
    }
}