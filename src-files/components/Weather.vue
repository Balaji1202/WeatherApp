<template>
	<div class="fluid" id="weather-content">
		<Loader
			:text="this.userInfoText"
			v-if="!this.$root.StatusData.weatherReceived || this.$root.StatusData.scrolledUp"/>
		<WeatherContent
			v-if="this.$root.StatusData.weatherReceived && !this.$root.StatusData.scrolledUp"
			:weatherDetails="this.weatherDetails"/>
		<InfoFooter
			v-if="this.$root.StatusData.weatherRequested"/>
	</div>
</template>

<script>
import ScrollDown from './ScrollDown'
import InfoFooter from './InfoFooter.vue';
import Loader from './Loader.vue';
import WeatherContent from './WeatherContent.vue';
import * as url from './url.js';
export default {
	components: {
		WeatherContent,
		Loader,
		ScrollDown,
		InfoFooter
	},
	data() {
		return {
			statusData: {},
			userInfoText: 'LOOKING OUTSIDE FOR YOU... ONE SEC',
			location: {
				lat: '',
				lon: ''
			},
			weatherDetails: {}
		}
	},
	methods: {
		getUrl: url.url,
		async getWeather(url) {
			let response = await fetch(url);
			response = await response.json();
			this.weatherDetails = response.data[0];
			let time = (new Date()).getMinutes();
			let hashedLocation = {lat: this.location.lat, lon: this.location.lon, time: Math.floor(time/15)};
			sessionStorage.setItem(JSON.stringify(hashedLocation), JSON.stringify(this.weatherDetails));
			this.$root.StatusData.weatherReceived = true
		},
		getLocation() {
			navigator.geolocation.getCurrentPosition(position => {
					this.location.lat = position.coords.latitude;
					this.location.lon = position.coords.longitude;
					let url = this.getUrl(this.location.lat, this.location.lon);
					let time = (new Date()).getMinutes();
					let hashedLocation = {lat: this.location.lat, lon: this.location.lon, time: Math.floor(time/15)};
					this.weatherDetails = sessionStorage.getItem(JSON.stringify(hashedLocation));
					if(!this.weatherDetails) {
						this.getWeather(url);
					}
					if(this.weatherDetails) {
						this.weatherDetails = JSON.parse(this.weatherDetails);
						this.$root.StatusData.weatherReceived = true
					}
				},
				error => {
					this.$root.StatusData.errorLocation = true;
				}
			);
		}
	},
	mounted() {
		window.scroll({
			top: 800,
			left: 0,
			behavior: "smooth"
		});
	},
	created() {
		this.statusData = this.$root.StatusData;
		this.$root.StatusData.weatherReceived = false;
		this.getLocation();
	},
	watch: {
		statusData: {
			handler() {
				this.$root.StatusData.weatherReqLocal === true ? this.userInfoText = 'LOOKING OUTSIDE FOR YOU... ONE SEC': this.userInfoText = `HOW'S THE WEATHER TODAY?` ;
				if(this.$root.StatusData.errorLocation){
					this.userInfoText = 'LOOKS LIKE LOCATION IS TURNED OFF! TURN IT ON AND TRY AGAIN';
				}
			},
			deep: true
		},
	}
}
</script>

<style scoped>
	.fluid {
		margin: 100px 0 100px 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		font-family: sans-serif;
		font-family: 'Courier New', Courier, monospace;
		text-align: center;
		font-size: 30px;
	}
	@media (max-width: 640px)
	{
		.fluid {
			margin: 100px 0 100px 0;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			font-family: sans-serif;
			font-family: 'Courier New', Courier, monospace;
			text-align: center;
			font-size: 30px;
		}
	}
</style>
