import Vue from 'vue';
import App from './App.vue';

new Vue({
	data() {
		return {
			StatusData: {
				scrolledUp: true,
				scrolledDown: false,
				weatherRequested: false,
				weatherReceived: false,
				weatherReqLocal: false
			}
		}
	},
	render: h => h(App)
}).$mount('#weather-watch');