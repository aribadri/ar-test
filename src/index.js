import { changeTextures } from './change-textures'


document.addEventListener("DOMContentLoaded", function () {
    AFRAME.registerComponent('change-textures', changeTextures)
    
    const btns = document.querySelector('.btns-wrapper')
    const activateBtn = document.querySelector('.start-btn')


    let isPlaying = false
    // const sceneEl = document.querySelector('a-scene');
    const target = document.getElementById('target');
   

    // sceneEl.addEventListener("arReady", (event) => {
    // });

    target.addEventListener("targetFound", event => {
        btns.classList.remove('hidden')
        activateBtn.classList.remove('hidden')


    });

})