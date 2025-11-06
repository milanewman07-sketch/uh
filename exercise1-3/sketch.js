/**
 * A class representing a UI button.
 */
class Button {
    x;
    y;
    width;
    height;
    label;

    /**
     * Creates a new Button.
     * @param {number} x The x coordinate of the button (CORNER mode).
     * @param {number} y The y coordinate of the button (CORNER mode).
     * @param {number} width The width of the button.
     * @param {number} height The height of the button.
     * @param {string} label The text to display on the button.
     */
    constructor(x, y, width, height, label) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.label = label
    }

    /**
     * Draws the button at its specified location and dimensions. Also 
     * displays the label on the button. If the mouse is over the button, 
     * the button's fill colour will be blue (0, 0, 255). Otherwise, it 
     * will be black.
     */
    draw() {
        if (this.#mouseIsOver(this.x, this.y, this.x + this.width, this.y + this.height)) {
            fill(0, 0, 255)
        } else {
            fill(255)
        }
        rect(this.x, this.y, this.width, this.height)
        fill(0)
        text(this.label, this.x + this.width / 2, this.y + this.height / 2)
    }

    /**
     * A private method that checks if the mouse is over the button. 
     * @returns {boolean} True if the mouse is over the button, false otherwise.
     */
    #mouseIsOver(x1, y1, x2, y2) {
        if (x1 < mouseX && mouseX < x2 && y1 < mouseY && mouseY < y2){
            return true
        } else {
            return false
        }
    }

    /**
     * Checks if button is clicked--the mouse is over the button and the mouse 
     * is currently pressed.
     * @returns {boolean} True if the button is clicked, false otherwise.
     */
    clicked() {
        let counter
        if (this.#mouseIsOver && mouseClicked()) {
            counter ++
        }
        return counter

    }
}

function setup() {
    createCanvas(600, 600)
    textAlign(CENTER, CENTER)
    textSize(30)
}

let thebutton = new Button(100, 100, 100, 100, "hello")

function draw() {
    thebutton.draw()
    fill(0)
}