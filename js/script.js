window.addEventListener('load', start);

var inputRange = null;
var inputFrequency = null;
var divPodcasts = null;

function start() {
	inputRange = document.querySelector('#inputRange');
	inputFrequency = document.querySelector('#inputFrequency');
	divPodcasts = document.querySelector('#divPodcasts');

	inputRange.addEventListener('input', handleRangeChange);
}

function handleRangeChange(event) {
	var currentFrequency = event.target.value;
	inputFrequency.value = currentFrequency;

	renderPodcastFrom(currentFrequency);
}
