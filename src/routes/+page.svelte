<script>
    import Scene from '$lib/components/Scene.svelte';

    let width;
    let height;
    let el;

    $: {
        console.log(width);
        console.log(height);
        console.log(`Client Height: ${el?.clientHeight}`);
    }
</script>

<div bind:clientWidth={width} bind:clientHeight={height} class='flex-grow overflow-hidden'>
    <Scene 
        width={width}
        height={height}
    />
</div>
