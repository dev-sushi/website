<script lang="ts">
	import { onMount } from 'svelte';
	import { get, writable, type Writable } from 'svelte/store';

	export let value: string;
	export const spanData: Writable<HTMLElement> = writable();

	onMount(() => {
		document.addEventListener('mousemove', (e) => {
			const position: any = get(spanData).getAttribute('data-value');
			const x = (window.innerWidth - e.pageX * position) / 90;
			const y = (window.innerHeight - e.pageY * position) / 90;

			get(spanData).style.transform = `translateX(${x}px) translateY(${y}px)`;
		});
	});
</script>

<span data-value={value} bind:this={$spanData}>
	<p><slot /></p>
</span>

<style>
	p {
		font-size: 3em;
		filter: grayscale(30%);
	}
</style>
