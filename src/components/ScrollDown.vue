<template>
	<transition name="fade">
		<button
			v-if="display"
			@click="scrollDown"
			class="scroll-down">
		</button>
	</transition>
</template>

<script>
export default {
	data() {
		return {
			display: true,
		}
	},
	methods: {
		scrollDown() {
			this.$root.StatusData.weatherRequested = true;
			this.display = false;
			window.scroll({
				top: 1600,
				left: 0,
				behavior: "smooth"
			});
		}
	}
}
</script>

<style scoped>
	.scroll-down {
		opacity: 1;
		-webkit-transition: all .5s ease-in 3s;
		transition: all .5s ease-in 3s;
	}

	.scroll-down {
		background-color: #4C4973;
		position: absolute;
		bottom: -250px;
		left: 50%;
		margin-left: -30px;
		height: 50px;
		width: 50px;
		border-radius: 50%;
		border: 2px solid #FFF;
		outline: none;
		background-size: 14px auto;
		z-index: 2;
		-webkit-animation: bounce 2s infinite 1s;
		animation: bounce 2s infinite 1s;
		-webkit-transition: all .2s ease-in;
		transition: all .2s ease-in;
	}
	.scroll-down:active {
		background-color: black;
	}
	.scroll-down:before {
		position: absolute;
		top: calc(50% - 8px);
		left: calc(50% - 7px);
		transform: rotate(-45deg);
		display: block;
		width: 12px;
		height: 12px;
		content: "";
		border: 2px solid white;
		border-width: 0px 0 2px 2px;
	}
	
		@keyframes bounce {
		0%,
		100%,
		20%,
		50%,
		80% {
			-webkit-transform: translateY(0);
			-ms-transform: translateY(0);
			transform: translateY(0);
		}
		40% {
			-webkit-transform: translateY(-10px);
			-ms-transform: translateY(-10px);
			transform: translateY(-10px);
		}
		60% {
			-webkit-transform: translateY(-5px);
			-ms-transform: translateY(-5px);
			transform: translateY(-5px);
		}
	}
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
</style>