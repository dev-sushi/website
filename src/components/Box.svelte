<div id="box">
	<slot />
</div>

<style>
	#box {
		width: 575px;
		height: 300px;

		border-radius: 5px;
		border: 15px ridge salmon;

		background-color: #1f1f1f;
		animation: show 1s;

		position: absolute;
		right: 20vw;

		top: 18vw;
	}

	@keyframes show {
		0% {
			transform: rotate(-30deg);
			right: 100vw;
		}

		100% {
			transform: rotate(0deg);
			right: 20vw;
		}
	}
</style>
