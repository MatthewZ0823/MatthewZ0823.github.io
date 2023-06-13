<script>
    import * as THREE from 'three';
    import { getScene } from '$lib/scene.js';
    import { onDestroy, onMount } from 'svelte';
    import { beforeRenderScheduler } from '../beforeRenderScheduler';

    export let position = {
        x: 0,
        y: 0,
        z: 0
    };
    export let omega = 0;
    let cubeObject;

    onMount(() => {
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);

        cube.position.x = position.x;
        cube.position.y = position.y;
        cube.position.z = position.z;

        const rotateCube = () => {
            cube.rotation.x += omega;
            cube.rotation.y += omega;
        }

        const cubeObj = {
            geometry: geometry,
            material: material,
            mesh: cube,
            rotateCube: rotateCube
        }

        getScene().add(cube);
        beforeRenderScheduler.addCallback(rotateCube);
        cubeObject = cubeObj;
    });

    onDestroy(() => {
        getScene().remove(cubeObject.mesh);
        beforeRenderScheduler.removeCallback(cubeObject.rotateCube);
    });
</script>
