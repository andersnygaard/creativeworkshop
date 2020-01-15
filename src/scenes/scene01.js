import Scene from "/scene.js";

let scene = new Scene();
let speed = 0.05;
let w, h, max;
let pg;

scene.preload = p => {
    w = p.windowWidth;
    h = p.windowHeight;

    if (w > h) {
        max = h;
    } else {
        max = w;
    }
};

scene.setup = p => {
    p.background(100);
    pg = p.createGraphics(w, h, p.WEBGL);
    pg.fill(200);
};

scene.draw = p => {
    p.push();

    pg.background(100);

    pg.rotateX(speed);
    pg.rotateY(speed);

    pg.box(max / 2, max / 2, max / 2);

    p.image(pg, 0, 0);

    
    p.fill(0);
    p.stroke(255);
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(32);
    p.text("Scene 01", w - 100, h - 100);
    
    p.pop();
};

export default scene;
