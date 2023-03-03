<script lang="ts">
	import '../index.css';
</script>

<div>
	<span>
		<h1>sushi</h1>
		<p>Use functions from any language, in any language.</p>
	</span>
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

	h1,
	p {
		color: white;
	}

	h1 {
		font-weight: 800;
		font-size: 3em;
	}

	p {
		margin-top: 10px;
		white-space: pre-line;
	}
</style>
