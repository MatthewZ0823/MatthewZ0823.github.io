<script>
    import * as THREE from 'three';
    import { getScene } from '$lib/scene.js';
    import { onDestroy, onMount } from 'svelte';

    export let position = new THREE.Vector3();
    export let rotation = new THREE.Euler();
    let cubeObject;

    onMount(() => {
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);

        // This looks pretty ugly
        cube.position.x = position.x;
        cube.position.y = position.y;
        cube.position.z = position.z;
        cube.rotation.x = rotation.x;
        cube.rotation.y = rotation.y;
        cube.rotation.z = rotation.z;

        const cubeObj = {
            geometry: geometry,
            material: material,
            mesh: cube,
        }

        getScene().add(cube);
        cubeObject = cubeObj;
    });

    onDestroy(() => {
        getScene().remove(cubeObject.mesh);
    });
</script>
