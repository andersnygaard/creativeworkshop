export default class Music {
    constructor() {
        var vol = new Tone.Volume(-8).toMaster();

        var phaser = new Tone.Phaser({
            frequency: 15,
            octaves: 5,
            baseFrequency: 500
        }).connect(vol);

        this.synth = new Tone.AMSynth({
            harmonicity: 2,
            detune: 0,
            envelope: {
                attack: 0.01,
                decay: 0.01,
                sustain: 1,
                release: 0.5
            },
            modulationEnvelope: {
                attack: 0.5,
                decay: 3,
                sustain: 1,
                release: 0.5
            }
        }).connect(phaser);

        let sampler = new Tone.Sampler({
            C3: "music/glitch01.ogg",
            D3: "music/glitch02.ogg",
            E3: "music/glitch03.ogg",
            F3: "music/glitch04.ogg",
            G3: "music/glitch05.ogg",
            A4: "music/glitch06.ogg",
            B4: "music/glitch07.ogg",
            C4: "music/glitch08.ogg",
            D4: "music/glitch09.ogg"
        }).toMaster();

        var notes = ["C3", "D3", "E3", "F3", "A4", "B4", "C4", "D4"];

        this.loop = new Tone.Loop(function(time) {
            var note = notes[Math.floor(Math.random() * notes.length)];

            sampler.triggerAttackRelease(note, "4n");
        }, "2n");

        Tone.Transport.bpm.value = 100;
        Tone.Transport.start();
    }

    play() {
        Tone.start();
        this.loop.start();
        this.synth.triggerAttack("C0");
    }

    fadeout() {
        /*this.loop.stop();
        this.synth.triggerRelease();*/
    }
}
