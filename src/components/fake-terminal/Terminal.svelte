<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import type { TerminalText } from '../../types/terminal';
	import Text from './Text.svelte';
	export let text: TerminalText[];

	function createText(content: string, ms: number) {
		const div = document.createElement('div');

		return new Promise((resolve) => {
			setTimeout(() => {
				new Text({
					props: {
						content: content
					},
					target: div
				});

				resolve(div.outerHTML);
			}, ms);
		});
	}
</script>

{#each text as { content, ms, typewriter }}
	{#await createText(content, ms)}
		<p />
	{:then c}
		{#if typewriter}
			<Typewriter cursor={false} interval={50}>
				<p>{@html c}</p>
			</Typewriter>
		{:else if content == '&nbsp;'}
			<p>&nbsp;</p>
		{:else}
			{@html c}
		{/if}
	{/await}
{/each}
