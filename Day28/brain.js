// Get our element 
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.full_screen');

// Build the function
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updatePlayButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip() {
    const skiptime = this.dataset.skip;
    console.log(skiptime);
    video.currentTime += parseFloat(skiptime);
}


// Hook up the event listeners;
video.addEventListener('click', togglePlay);
video.addEventListener('pause', updatePlayButton);
video.addEventListener('play', updatePlayButton);
skipButtons.forEach(button => {
    button.addEventListener('click', skip);
});
