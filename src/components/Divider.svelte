<div id="divider-wrapper">
	<p>{'='.repeat(500)}</p>
</div>

<style>
	#divider-wrapper {
		position: absolute;
		width: 100vw;
		bottom: 0;
	}

	p {
		color: white;
		font-size: 2em;

		font-weight: 800;
		opacity: 0.4;

		animation: marquee 25s linear infinite;
	}

	@keyframes marquee {
		0% {
			transform: translate(0, 0);
		}

		100% {
			transform: translate(-100%, 0);
		}
	}
</style>
