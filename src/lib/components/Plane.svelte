<script>
    import * as THREE from 'three';
    import { getScene, queueFunctionBeforeRender, dequeueFunctionBeforeRender } from '$lib/scene.js';
    import { onDestroy, onMount } from 'svelte';

    export let position = {
        x: 0,
        y: 0,
        z: 0
    };
    let planeObject;

    onMount(() => {
        const geometry = new THREE.PlaneGeometry(100, 100);
        const material = new THREE.MeshPhongMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
        const plane = new THREE.Mesh(geometry, material);

        plane.position.x = position.x;
        plane.position.y = position.y;
        plane.position.z = position.z;
        plane.rotation.x = Math.PI/2;

        const planeObj = {
            geometry: geometry,
            material: material,
            mesh: plane
        }

        getScene().add(plane);

        planeObject = planeObj;
    });

    onDestroy(() => {
        getScene().remove(planeObject.mesh);
    });
</script>
