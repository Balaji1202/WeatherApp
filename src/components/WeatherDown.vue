<template>
	<a href="#weather-content">
		<transition name="fade">
			<button
				v-if="display"
				@click="scrollDown"
				class="scroll-down btn">
				Get the weather around you!
			</button>
		</transition>
	</a>
</template>

<script>
export default {
	data() {
		return {
			display: true,
			scrollPosition: this.$parent.scrollPosition
		}
	},
	methods: {
		scrollDown() {
			this.$root.StatusData.weatherRequested = true;
			this.$root.StatusData.weatherReqLocal = true;
			this.display = false;
			window.scroll({
				top: 800,
				left: 0,
				behavior: "smooth"
			});
		}
	},
	watch: {
		scrollPosition: {
			handler: function(scrollPosition) {
				if(scrollPosition.scrollYPosition < 100) {
					this.display = true;
					this.$root.StatusData.scrolledUp = true;
					this.$root.StatusData.weatherReqLocal = false;
				}
				else {
					this.display = false;
					this.$root.StatusData.scrolledUp = false;
					this.$root.StatusData.weatherReqLocal = true;
				}
			},
			deep: true
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
		bottom: 30px;
		left: 50%;
		margin-left: -110px;
		display: block;
		border: 2px solid #FFF;
		outline: none;
		background-size: 14px auto;
		border-radius: 10%;
		z-index: 2;
		-webkit-animation: bounce 2s infinite 1s;
		animation: bounce 2s infinite 1s;
		-webkit-transition: all .2s ease-in;
		transition: all .2s ease-in;
	}
	.scroll-down:active {
		background-color: black;
	}
	/* .scroll-down:before {
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
	} */
		.btn {
			border: 2px solid #4C4973;
			background: none;
			padding: 10px 20px;
			font-size: 20px;
			font-family: 'Courier New', Courier, monospace;
			outline: none;
			cursor: pointer;
			transition: 0.5s;
			overflow: hidden;
			border-radius: 20px 10px;
			width: 230px;
			color: #4C4973;
			background-color: white;
		}
		.btn:hover {
			background-color: #4C4973;
			color: white;
			border: 2px solid white;
		}
		.btn:active {
			background-color: black;
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