<template>
	<div>
		<div class="weather">
			<div class="location">
				<h1 class="location-timezone">Timezone of {{ this.weatherDetails.timezone }} | {{ this.weatherDetails.country_code }}</h1>
			</div>
			<h1 class="location-city">{{ this.weatherDetails.city_name }}</h1>
			<div class="temperature">
				<div class="degree-section">
					<h2 class="temperature-degree">{{ this.weatherDetails.temp }}<span>&#8451;</span></h2>
				</div>
				<div class="temperature-description">{{ this.weatherDetails.weather.description }}</div>
			</div>
			<h6>Observed on {{ this.weatherDetails.ob_time }}</h6>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		weatherDetails: {
			type: Object,
			required: true
		}	
	}
}
</script>

<style scoped>
	.weather {
		font-size: 60%;
		margin-top: 0px;
	}
	.location { 
		display: flex;
	}
	.temperature {
		font-family: 'Courier New', Courier, monospace;
		flex-direction: column;
		cursor: pointer;
	}
	.temperature:active {
		color: white
	}
	.degree-section {
		align-items: center;
	}
	.degree-section span, .temperature-description {
		padding-bottom: 20px;
		font-size: 45px;
	}
	.degree-section h2 {
		font-size: 50px;
	}
</style>