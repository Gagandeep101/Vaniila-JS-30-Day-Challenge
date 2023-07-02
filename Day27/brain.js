let countdown;
const displayTimer = document.querySelector('.display__time-left');
const displayEndTimer = document.querySelector('.display__end-time');
const button = document.querySelectorAll('[data-time]');

// In these function get seconds and update the counter on every seconds
function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    countdown = setInterval(() => {
        const secondleft = Math.round((then - Date.now()) / 1000);
        
        // if second left is less than 0 then stop updating counter
        if (secondleft <0) {
            clearInterval(countdown);
            return;
        }
        console.log(secondleft);
    }, 1000);
}
timer(10);
