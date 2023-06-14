<script>
    import * as THREE from 'three';
    import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
    import { FontLoader } from 'three/addons/loaders/FontLoader.js';
    import { getScene } from '$lib/scene.js';
    import { onDestroy, onMount } from 'svelte';

    export let position = new THREE.Vector3();
    export let rotation = new THREE.Euler();
    export let options = {
        size: 10,
        height: 0.1
    };
    let textObject;

    const onFontLoad = (font) => {
        const geometry = new TextGeometry('Hello three.js!', {
            font: font,
            ...options
        });
        const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
        const text = new THREE.Mesh(geometry, material);

        // This looks pretty ugly
        text.position.x = position.x;
        text.position.y = position.y;
        text.position.z = position.z;
        text.rotation.x = rotation.x;
        text.rotation.y = rotation.y;
        text.rotation.z = rotation.z;

        const textObj = {
            geometry: geometry,
            material: material,
            mesh: text,
        };

        getScene().add(text);
        textObject = textObj;
    }

    onMount(() => {
        const loader = new FontLoader();
        loader.load('/src/lib/fonts/helvetiker_bold.typeface.json', onFontLoad);
    });

    onDestroy(() => {
        getScene().remove(textObject.mesh);
    });
</script>
