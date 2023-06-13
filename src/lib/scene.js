import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const beforeRenderFunctionQueue = [];
let renderer;

camera.position.z = 5;

const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.PointLight(color, intensity);
light.position.set(-1, 6, 0);
scene.add(light);

const animate = () => {
    requestAnimationFrame(animate);
    beforeRenderFunctionQueue.forEach(func => func());
    renderer.render(scene, camera);
}

export const resize = (width, height) => {
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}

export const createScene = (el, width, height) => {
    renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
    resize(width, height);
    animate();
}

export const getScene = () => scene;

/**
 * Add a callback to be run before every render of the scene
 * @param {Function} callback Callback function to be run
 */
export const queueFunctionBeforeRender = (callback) => {
    beforeRenderFunctionQueue.push(callback);
}

export const dequeueFunctionBeforeRender = (callback) => {
    const index = beforeRenderFunctionQueue.findIndex(callback);
    if (index > -1) {
        beforeRenderFunctionQueue.splice(index, 1);
    }
}
