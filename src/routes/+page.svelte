<script lang="ts">
	import Box from '../components/Box.svelte';
	import Divider from '../components/Divider.svelte';
	import Terminal from '../components/fake-terminal/Terminal.svelte';
	import Parlax from '../components/Parlax.svelte';
	import Scroll from '../components/Scroll.svelte';
	import '../index.css';
	import { animationStep, heading, showAnimation } from '../stores/app';
</script>

<div>
	<span>
		<div id="parlax-wrapper">
			<section id="main-section">
				{#if $showAnimation == false}
					<Parlax value="1"><h1 bind:this={$heading}>sushi</h1></Parlax>
				{:else}
					<Box>
						<Terminal text={[{ content: 'hello world', ms: 2000 }]} />
					</Box>

					<span>
						<p id="box-hint">Sushi is a library...</p>
						<br />

						{#if $animationStep == 1}
							<p id="box-hint">That allows you to run functions <br /> from any language</p>
						{/if}
					</span>
				{/if}
				<Divider />
			</section>
		</div>
	</span>
</div>

<div id="parlax-wrapper">
	<Parlax value="30">💻</Parlax>
	<Parlax value="5">🔥</Parlax>
	<Parlax value="-15">🍣</Parlax>
</div>

<Scroll />

<style>
	@import 'https://rsms.me/inter/inter.css';

	:root {
		font-family: 'Inter', sans-serif;
	}

	@supports (font-variation-settings: normal) {
		:root {
			font-family: 'Inter var', sans-serif;
		}
	}

	#main-section::before {
		content: '';
		position: absolute;

		margin: 0 auto;
		left: 0;
		top: 0;

		mask-image: radial-gradient(50% 60%, black 30%, transparent 90%);
		filter: brightness(30%);

		width: 100%;
		height: 100%;
		background: url('../img/grid.svg');
	}

	:global(body) {
		background: url('../img/noise.png');
		background-color: #121212;

		overflow-y: auto;
		height: 400vh;
	}

	span {
		width: 100vw;
	}

	div {
		width: 100%;
		height: 100%;

		display: grid;
		place-items: center;
		position: fixed;
	}

	#box-hint {
		color: white;
		font-weight: 700;

		margin-left: 15px;
		font-size: 2em;
	}

	h1 {
		color: white;
		font-weight: 800;
		font-size: 5em;
	}

	h1:not(.animation) {
		background: -webkit-linear-gradient(#fa8072, #c9665b);

		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.animation {
		font-size: 2em;
		margin-right: 500px;

		width: 100vh;
	}

	#parlax-wrapper {
		position: relative;
		width: 100%;
		height: 100vh;

		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
