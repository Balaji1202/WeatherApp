<template>
	<transition name="fade">
		<button
			v-if="scrolled"
			@click="scrollToTop"
			class="scroll-to-top">
		</button>
	</transition>
</template>

<script>
export default {
	data() {
		return {
			scrolled: false,
			scrollPosition: this.$parent.scrollPosition
		}
	},
	methods: {
		scrollToTop() {
			window.scroll({
				top: 0,
				left: 0,
				behavior: "smooth"
			});
		}
	},
	watch: {
		scrollPosition: {
			handler: function(scrollPosition) {
				if(scrollPosition.scrollYPosition>20) {
					this.scrolled = true
				}
				else {
					this.scrolled = false
				}
			},
			deep: true
		}
	}
	
}
</script>

<style scoped>
	.scroll-up {
		padding-top: 5px;
	}
	.scroll-to-top:before {
		position: absolute;
		top: calc(50% - 5px);
		left: calc(50% - 6px);
		transform: rotate(135deg);
		display: block;
		width: 12px;
		height: 12px;
		content: "";
		border: 2px solid white;
		border-width: 0px 0 2px 2px;
	}
	.scroll-to-top{
		position: fixed;
		right: 10px;
		bottom: 10px;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		color: white;
		background-color:#4C4973;
		border: none;
		outline: none;
		cursor: pointer;
	}
	.scroll-to-top:active{
		background-color: black
	}
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
</style>