const hourhand = document.querySelector(".hourhand");
const minhand = document.querySelector(".minhand");
const sechand = document.querySelector(".sechand");
setInterval( setdate, 1000)
function setdate() {
    const date= new Date();
    const hourhandtime=date.getHours();
    const minhandtime=date.getMinutes();
    const sechandtime=date.getSeconds();
}