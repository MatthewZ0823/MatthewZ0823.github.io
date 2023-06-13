<script>
    import Scene from '$lib/components/Scene.svelte';
    import Cube from '$lib/components/Cube.svelte';
    import Plane from '$lib/components/Plane.svelte';

    let width;
    let height;
</script>

<div bind:clientWidth={width} bind:clientHeight={height} class='flex-grow overflow-hidden'>
    <Scene 
        width={width}
        height={height}
    >
        <Cube 
            position={{
                x: 1,
                y: 1,
                z: 1
            }}
            omega={0.01}
        />
        <Plane
            position={{
                x: 0,
                y: -2,
                z: 0
            }}
        />
    </Scene>
</div>
