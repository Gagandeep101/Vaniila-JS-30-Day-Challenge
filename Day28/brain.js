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


// Hook up the event listeners;
video.addEventListener('click', togglePlay);
