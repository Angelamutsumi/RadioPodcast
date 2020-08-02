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

	handlePodcastsFrom(currentFrequency);
}

function handlePodcastsFrom(frequency) {
	var foundPodcast = null;

	for (var i = 0; i < realPodcasts.length; i++) {
		var currentPodcast = realPodcasts[i];

		if (currentPodcast.id === frequency) {
			foundPodcast = currentPodcast;
			break;
		}
	}
	if (foundPodcast) {
		renderPodcast(foundPodcast);
	} else {
		divPodcasts.innerHTML = 'Nenhum podcast encontrado.';
	}
}

function renderPodcast(podcast) {
	const img = document.createElement('img');
	img.src = '../img/' + podcast.img;

	divPodcasts.appendChild(img);
}
