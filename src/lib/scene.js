import * as THREE from 'three';
import { beforeRenderScheduler } from './beforeRenderScheduler';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer;

camera.position.z = 5;

const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.PointLight(color, intensity);
light.position.set(-1, 6, 0);
scene.add(light);

const animate = () => {
    requestAnimationFrame(animate);
    beforeRenderScheduler.executeAllCallbacks();
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
