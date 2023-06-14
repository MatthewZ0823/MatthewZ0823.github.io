<script>
    import Scene from '$lib/components/Scene.svelte';
    import Cube from '$lib/components/Cube.svelte';
    import ThreeText from '$lib/components/ThreeText.svelte';
    import * as THREE from 'three';

    let width;
    let height;
</script>

<div bind:clientWidth={width} bind:clientHeight={height} class='flex-grow overflow-hidden'>
    <Scene 
        width={width}
        height={height}
    >
        <Cube
            position={new THREE.Vector3(0, 0, -50)}
            rotation={new THREE.Euler(0, 0, 0)}
        />
        <ThreeText 
            position={new THREE.Vector3(0, 0, -50)}
            rotation={new THREE.Euler(0, 0, 0)}
            options={{
                size: 20,
                height: 5
            }}
        />
    </Scene>
</div>
