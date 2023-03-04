<script lang="ts">
	import { onMount } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	export let value: string;
	export const spanTransform: Writable<any> = writable();

	onMount(async () => {
		document.addEventListener('mousemove', (e) => {
			const x = (window.innerWidth - e.pageX * value) / 90;
			const y = (window.innerHeight - e.pageY * value) / 90;

			spanTransform.set(`translateX(${x}px) translateY(${y}px)`);
		});
	});
</script>

<span style="transform: {$spanTransform}">
	<p><slot /></p>
</span>

<style>
	p {
		font-size: 3em;
		filter: grayscale(30%);
	}

	span {
		width: 100vw;
	}
</style>
