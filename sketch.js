let eyeWidth = 50;
let eyeWidth1 = 100;
let faceWidth = 400;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(153, 0, 153)
}

function draw() {
    fill(153)
    noStroke();
    ellipse(mouseX,mouseY,50,50);

    fill(0);
    rect(0,0,50,50);
    rect(600 - 50, 0, 50, 50);
    rect(600 - 50, 600-50, 50, 50);
    rect(0, 600-50, 50, 50);

    fill("blue")
    stroke(0);
    ellipse(300, 300, faceWidth, faceWidth);

    fill(255);
    ellipse(120, 350, eyeWidth1, eyeWidth1);
    ellipse(280, 350, eyeWidth1, eyeWidth1);

    fill("orange");
    ellipse(100, 360, eyeWidth, eyeWidth);
    ellipse(260, 360, eyeWidth, eyeWidth);

    noFill();
    
    strokeWeight(6)
    arc(150, 300, 120, 100, PI + QUARTER_PI, TWO_PI);
    arc(320, 300, 120, 100, PI + QUARTER_PI, TWO_PI);

    strokeWeight(4)
    fill("red");
    triangle(180, 400, 220, 400, 225, 450)

  

translate(400, 0)

    fill("blue")
    stroke(0);
    ellipse(300, 300, faceWidth, faceWidth);

    fill(255);
    ellipse(120, 350, eyeWidth1, eyeWidth1);
    ellipse(280, 350, eyeWidth1, eyeWidth1);

    fill("orange");
    ellipse(100, 360, eyeWidth, eyeWidth);
    ellipse(260, 360, eyeWidth, eyeWidth);

    noFill();
    
    strokeWeight(6)
    arc(150, 300, 120, 100, PI + QUARTER_PI, TWO_PI);
    arc(320, 300, 120, 100, PI + QUARTER_PI, TWO_PI);

    fill("red");
    triangle(180, 400, 220, 400, 225, 450)



 
}
