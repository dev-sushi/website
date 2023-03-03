<script lang="ts">
	import Parlax from '../components/Parlax.svelte';
	import Scroll from '../components/Scroll.svelte';
	import '../index.css';
	import { heading, showAnimation } from '../stores/app';
</script>

<div>
	<span>
		<div id="parlax-wrapper">
			<Parlax value="1"><h1 class:animation={$showAnimation} bind:this={$heading}>sushi</h1></Parlax
			>
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

	:global(body) {
		background: url('../img/noise.png');
		background-color: #121212;

		overflow-y: auto;
		height: 200vh;
	}

	div {
		width: 100%;
		height: 100%;

		display: grid;
		place-items: center;
		position: fixed;
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
		color: yellow;
		animation: scroll-animation 1s;

		font-size: 1em;
		margin-right: 500px;
	}

	@keyframes scroll-animation {
		0% {
			font-size: 5em;
			margin-right: 0px;
		}

		100% {
			margin-right: 500px;
			font-size: 1em;
		}
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
