import scene01 from "/scene01.js";
import scene02 from "/scene02.js";
import scene03 from "/scene03.js";
import endscene from "/endscene.js";
import Music from "./music.js";
import SceneTypes from "./Scenetypes.js";

let sketch = function(p) {
    let sequence = [scene01, scene02, scene03, endscene];
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
        }, 5000)
    };

    p.draw = function() {
        currentScene.draw(p);
    };
};

new p5(sketch);