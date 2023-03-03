<script lang="ts">
	import Parlax from '../components/Parlax.svelte';
	import '../index.css';
</script>

<div>
	<span>
		<div id="parlax-wrapper">
			<Parlax value="1"><h1>sushi</h1></Parlax>
		</div>
	</span>
</div>

<div id="parlax-wrapper">
	<Parlax value="30">💻</Parlax>
	<Parlax value="5">🔥</Parlax>
	<Parlax value="-15">🍣</Parlax>
</div>

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
