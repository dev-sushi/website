<script lang="ts">
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

{#each text as { content, ms }}
	{#await createText(content, ms)}
		<p />
	{:then c}
		{@html c}
	{/await}
{/each}
