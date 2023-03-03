<script lang="ts">
	import { beforeUpdate } from 'svelte';
	import { get } from 'svelte/store';
	import { heading, showAnimation } from '../stores/app';

	let scrollY: number;

	beforeUpdate(() => {
		if (scrollY >= 510) {
			showAnimation.set(true);

			setTimeout(() => {
				get(heading).innerHTML = `sushi${'&nbsp;'.repeat(3)}saving indexed functions`;
			}, 600);
		} else if (scrollY < 510) {
			showAnimation.set(false);
			get(heading).innerHTML = `sushi`;
		}
	});
</script>

<svelte:window bind:scrollY />
