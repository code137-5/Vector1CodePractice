
let center;
let velocity;
let mouse;
let dir;
let m;
function setup() {
  createCanvas(640, 240);

}

function draw() {
    background(255);
    
    stroke(0);
    fill(127);
    if(center != null){
        circle(center.x, center.y, 48);
        center.add(velocity);

        if (center.x > width || center.x < 0) {
            velocity.x = velocity.x * -1;
        }
        if (center.y > height || center.y < 0) {
            velocity.y = velocity.y * -1;
        }
    }

    if(mouseIsPressed){
        dir = null;
        velocity = null;

        mouse = createVector(mouseX, mouseY);   
        mouse.sub(center);

        m = mouse.mag();
        fill(0);
        rect(0, 0, m, 10);

        translate(center.x, center.y);
        line(0,0, mouse.x,mouse.y);

        
    }
}

function mousePressed(){
    //console.log("Press");
    center = createVector(mouseX, mouseY);
    //circle(position.x, position.y, 48);
    
}

function mouseReleased(){
    //console.log("release");
    dir = p5.Vector.sub(mouse,createVector(0,0));
    dir.normalize();

    dir.mult(m/50);
    console.log(m);
    velocity = createVector(dir.x,dir.y);
    velocity.add(dir);
    velocity.limit(50);
}
