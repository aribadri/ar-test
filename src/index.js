document.addEventListener("DOMContentLoaded", function () {
    let isPlaying = false
    const sceneEl = document.querySelector('a-scene');
    const target = document.getElementById('target');
    const music = document.getElementById('music');
    const model = document.getElementById('model');

    let arSystem;

    sceneEl.addEventListener("arReady", (event) => {
        // console.log("MindAR is ready")
        // loadingEl.style.display = "none";
    });

    target.addEventListener("targetFound", event => {
        if (!isPlaying) {
            music.components.sound.playSound()
            model.setAttribute('animation-mixer', {
                'clip': 'mixamo.com',
                'loop': 'once',
              })
        }
        isPlaying = true

    });

})