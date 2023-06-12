<script>
    import { onMount } from 'svelte';
    import { createScene, resize } from '$lib/scene.js';

    let el;
    let sceneCreated = false;
    export let width = 0;
    export let height = 0;

    onMount(() => {
        createScene(el, width, height);
        sceneCreated = true;
    });

    $: {
        if (sceneCreated) resize(width, height)
    };
</script>

<canvas bind:this={el}></canvas>
