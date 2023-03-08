<script lang="ts">
	import { get, writable, type Writable } from 'svelte/store';
	import type { TerminalText } from '../../types/terminal';
	import Text from './Text.svelte';

	export let text: [TerminalText] = [{ content: ' ', ms: 0 }];
	const component: Writable<HTMLElement> = writable();
</script>

{#each text as { content, ms }}
	{(() => {
		setTimeout(() => {
			get(component).style.display = 'block';
		}, ms);

		return '';
	})()}

	<div bind:this={$component} style="display: none;">
		<Text>
			{content}
		</Text>
	</div>
{/each}
