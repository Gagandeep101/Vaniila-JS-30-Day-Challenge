// import speed bar and video
const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');
speed.addEventListener('mousemove', function (e) {

    // scroll lenght in y axis into video speed controller 
    const y = e.pageY - this.offsetTop;

    // how much speed is increased when scrolling the video speed controller in percentage
    const percent = y / this.offsetHeight;

    // minimum speed for video speed controller
    const min = 0.4;

    // maximum speed for video speed controller
    const max = 10;

    // calculate the height at which the video speed controller scrolling by mouse
    const height = Math.round(percent * 100) + '%';

    //  calculate how much video playing speed is increased by scrolling in video speed controller bar
    const playbackrate = percent * (max - min) + min;
    bar.style.height = height;
    bar.textContent = playbackrate.toFixed(1) + "x";
    video.playbackRate = playbackrate;
});