import Scene from '/scene.js';
import Scenetypes from '/Scenetypes.js';

let scene = new Scene();
let i = 0;
let zoff = 0;
let w, h;

scene.type = Scenetypes.EndScene;

scene.preload = (p) => {
    w = p.windowWidth;
    h = p.windowHeight;
}

scene.setup = (p) =>{
    p.background(255);

    p.noFill();
    p.textSize(w/10);
    p.stroke(100);
};

scene.draw = (p) => {
    p.push();
    p.clear();

    p.translate(w/2, h/2);

    p.beginShape();

    for(var count = 0; count < 360; count++){

        i+=1;

        var x = p.cos(i) * (w/3);
        var y = p.sin(i) * (w/3);

        var d = p.noise(x, y, zoff) * 2.55;

        x = x * d;
        y = y * d;

        p.curveVertex(x,y);

    }

    p.endShape(p.CLOSE);

    
    p.fill(0)
    p.stroke(0);
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(w/15);
    p.text("DOSIG", 0, 0);
    
    zoff += 0.1;

    p.pop();
};

export default scene;