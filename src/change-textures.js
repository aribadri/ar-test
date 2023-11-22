const changeTextures = {
    init() {
        const model = document.getElementById('model');
        model.addEventListener('model-loaded', () => {
            const btns = document.querySelectorAll('.btns-wrapper__item');
            const mesh = model.getObject3D('mesh');
            if (mesh) {
                mesh.traverse((node) => {
                    if (node.isMesh) {
                        for (let i = 0; i < btns.length; i++) {
                            btns[i].addEventListener('click', () => {
                                const newColor = new THREE.Color(getComputedStyle(btns[i]).backgroundColor);
                                if (node.material && node.name === 'Object_7') {
                                    node.material.color = newColor;
                                }
                            });
                        }
                    }
                });
            }
        });
    },
};

export { changeTextures };
