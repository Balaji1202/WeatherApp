<template>
	<div>
		<IntroImage/>
		<ScrollToTop/>
		<WeatherDown/>
		<Weather
			v-if="this.$root.StatusData.weatherRequested"/>
	</div>
</template>

<script>
import ScrollToTop from './components/ScrollToTop.vue';
import WeatherDown from './components/WeatherDown.vue';
import IntroImage from './components/IntroImage.vue';
import Weather from './components/Weather.vue';
export default {
	components: {
		ScrollToTop,
		WeatherDown,
		IntroImage,
		Weather
	},
	data() {
		return {
			scrollPosition: {
				scrollYPosition: '',
			}
		}
	},
	methods: {},
	created() {
		let _this = this;
		window.onscroll = () => {
			_this.scrollPosition.scrollYPosition = window.pageYOffset;
		};
	}
}
</script>