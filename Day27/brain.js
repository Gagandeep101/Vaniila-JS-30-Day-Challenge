let countdown;
const displayTimer = document.querySelector('.display__time-left');
const displayEndTimer = document.querySelector('.display__end-time');
const button = document.querySelectorAll('[data-time]');

// In these function get seconds and update the counter on every seconds
function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    // display_timer used to sound set countdown timer before updating it
    display_timer(seconds);
    countdown = setInterval(() => {
        const secondleft = Math.round((then - Date.now()) / 1000);
        
        // if second left is less than 0 then stop updating counter
        if (secondleft <0) {
            clearInterval(countdown);
            return;
        }
        display_timer(secondleft);
    }, 1000);
}

function display_timer(seconds) {
    const min=Math.round(seconds / 60);
    const sec=seconds % 60;
    console.log(min,sec);
    displayTimer.textContent=`${show_time_correct(min)}:${show_time_correct(sec)}`;
}
function show_time_correct(time) {
    return time<10? "0"+time:time;
}