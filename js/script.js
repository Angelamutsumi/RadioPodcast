window.addEventListener('load', start);

var inputRange = null;
var inputFrequency = null;
var divPodcasts = null;

function start() {
	inputRange = document.querySelector('#inputRange');
	inputFrequency = document.querySelector('#inputFrequency');
	divPodcasts = document.querySelector('#divPodcasts');

	inputRange.addEventListener('input', handleRangeChange);
	handlePodcastsFrom(inputRange.value);
}

function handleRangeChange(event) {
	var currentFrequency = event.target.value;
	inputFrequency.value = currentFrequency;

	handlePodcastsFrom(currentFrequency);
}

function handlePodcastsFrom(frequency) {
	var foundPodcast = null;

	// for (var i = 0; i < realPodcasts.length; i++) {
	// 	var currentPodcast = realPodcasts[i];

	// 	if (currentPodcast.id === frequency) {
	// 		foundPodcast = currentPodcast;
	// 		break;
	// 	}
	// }

	foundPodcast = realPodcasts.find(function(currentPodcast) {
		return currentPodcast.id === frequency;
	});
	renderPodcast(foundPodcast);
}

function renderPodcast(podcast) {
	if (!podcast) {
		divPodcasts.innerHTML = 'Nenhum podcast encontrado!';
		return;
	}

	// const img = document.createElement('img');
	// img.src = '../img/' + podcast.img;

	// const title = document.createElement('h2');
	// title.textContent = podcast.title;

	// const description = document.createElement('p');
	// description.textContent = podcast.description;

	// divPodcasts.innerHTML = '';
	// divPodcasts.appendChild(img);
	// divPodcasts.appendChild(title);
	// divPodcasts.appendChild(description);

	divPodcasts.innerHTML = `
	<img src='../img/${podcast.img}' />
	<h2> ${podcast.title} </h2>
	<p> ${podcast.description} </p>
	`;
}
