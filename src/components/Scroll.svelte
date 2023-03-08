<script lang="ts">
	import { beforeUpdate } from 'svelte';
	import { animationStep, showAnimation } from '../stores/app';

	let scrollY: number;

	beforeUpdate(() => {
		if (scrollY >= 600) {
			showAnimation.set(true);

			setTimeout(() => {
				animationStep.set(1);
			}, 1000);
		} else if (scrollY < 510) {
			showAnimation.set(false);
		}
	});
</script>

<svelte:window bind:scrollY />
