let countdown;
const displayTimer = document.querySelector('.display__time-left');
const displayEndTimer = document.querySelector('.display__end-time');
const button = document.querySelectorAll('[data-time]');

// In these function get seconds and update the counter on every seconds
function timer(seconds) {
    // when we click multiple button to change the timer its show few times before timer updation . So to clear previous countdown timer before using timer
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;

    // display_timer used to sound set countdown timer before updating it
    display_timer(seconds);

    display_end_timer(then - now);
    countdown = setInterval(() => {
        const secondleft = Math.round((then - Date.now()) / 1000);

        // if second left is less than 0 then stop updating counter
        if (secondleft < 0) {
            clearInterval(countdown);
            return;
        }
        display_timer(secondleft);
    }, 1000);
}

function display_timer(seconds) {
    const min = Math.round(seconds / 60);
    const sec = seconds % 60;
    displayTimer.textContent = `${show_time_correct(min)}:${show_time_correct(sec)}`;
}

function display_end_timer(seconds) {
    const end_date = new Date(seconds);
    const hour = end_date.getHours();
    const min = end_date.getMinutes();
    const sec = end_date.getSeconds();
    displayEndTimer.textContent = `Be Back At ${hour > 12 ? hour - 12 : hour} : ${show_time_correct(min)} : ${show_time_correct(sec)}`;
}
function show_time_correct(time) {
    return time < 10 ? "0" + time : time;
}

function start_timer(e){
    const seconds = this.dataset.time;
    timer(seconds);
}

button.forEach(button=>button.addEventListener('click',start_timer));

document.customForm.addEventListener('submit',function(e){
    e.preventDefault();
    timer(this.minutes.value);
    this.reset();
});