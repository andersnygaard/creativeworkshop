import scene01 from "/scenes/scene01.js";
import scene02 from "/scenes/scene02.js";
import scene03 from "/scenes/scene03.js";
import scene04 from "/scenes/scene04.js";
import endscene from "/scenes/endscene.js";
import Music from "/music/music.js";
import SceneTypes from "/Scenetypes.js";

let sketch = function(p) {
    let sequence = [scene01, scene02, scene03, scene04, endscene];
    let currentScene = scene01;

    let music = new Music();

    let h = p.windowHeight;
    let w = p.windowWidth;


    p.preload = function() {
        sequence.forEach(scene => {
            scene.init(p);
            scene.preload(p);
        });
    };

    p.setup = () => {

        p.createCanvas(w, h);
        p.background(255);
        p.frameRate(30);
        p.angleMode(p.DEGREES);
        p.noiseSeed(1);

        music.play();

        sequence.delayedForEach((scene)=>{
            currentScene = scene;
            p.clear();
            scene.setup(p);

            if(scene.type === SceneTypes.EndScene){
                music.fadeout();
            }
        }, 10000)
    };

    p.draw = function() {

        currentScene.draw(p);

        p.push();
        for (var x = 0; x < w; x++) {
            
            var y = p.random() * h;
            var color = p.color(p.random() * 255);
            color.setAlpha(p.random() * 255);
            p.stroke(color);
            p.rect(x, y, 1, 1);
        
        }
        p.pop();
    };
};

new p5(sketch);