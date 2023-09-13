function setup() {
    createCanvas(600, 600);
    background(153, 0, 153)
}

function draw() {
    stroke(0);
    fill("orange");
    ellipse(100, 100, 100, 100);
    fill(0, 225, 0);
    ellipse(600, 100, 300, 300);
    stroke(255, 0, 0);
    strokeWeight(4);
    rect(300, 300, 200, 200);
}
