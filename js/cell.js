class Cell{
    constructor(xPos, yPos){
        this.size = 15;
        this.state = floor(random(2));
        this.x = xPos;
        this.y = yPos; 
    }

    display(xPos, yPos){
        fill(state ? 0 : 255);
        square(1 + xPos, 1 + yPos, this.size);
    }

    clicked() {
        if(dist(mouseX, mouseY, this.x, this.y) < this.size){
            this.state = !this.state;
        }
    }
}