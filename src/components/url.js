export function url(lat, lon) {
	let proxy = 'https://cors-anywhere.herokuapp.com/';
	return `${proxy}http://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=6978a8871b084f49a232ced8c597f445`;
}