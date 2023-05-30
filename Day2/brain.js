const hourhand = document.querySelector(".hourhand");
const minhand = document.querySelector(".minhand");
const sechand = document.querySelector(".sechand");
setInterval( setdate, 1000)
function setdate() {
    const date= new Date();
    const hourhandtime=date.getHours();
    const minhandtime=date.getMinutes();
    const sechandtime=date.getSeconds();
    const hourhandrotate = ((hourhandtime / 12) * 360)+ (minhandtime/2);
    const minhandrotate = ((minhandtime / 60) * 360) +(sechandtime / 6); ;
    const sechandrotate=((sechandtime / 60) * 360);
    if (hourhandrotate==0) {
        hourhand.classList.add("no-transition");
    }
    else{
        hourhand.classList.remove("no-transition");
    }
    if (minhandrotate==0) {
        minhand.classList.add("no-transition");
    }
    else{
        minhand.classList.remove("no-transition");
    }
    if (sechandrotate==0) {
        sechand.classList.add("no-transition");
    }
    else{
        sechand.classList.remove("no-transition");
    }
}