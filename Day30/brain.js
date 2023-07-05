const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lasthole=false;
let timeUp;

function randTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function pickRandomHole(holes) {
    // select random hole with random idx
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    // if current hole is same as last hole then auto call these function again and again
    if (hole === lasthole) {
        return pickRandomHole(holes);
    }
    lasthole = hole;
    return hole;
}
function peephole() {
    // get random time between 200 ms and 1000 ms
    const time=randTime(200,1000);

    // get random hole
    const hole=pickRandomHole(holes);

    // show mole

    hole.classList.add('up');

    // remove mole after random time
    setTimeout(()=>{
        hole.classList.remove('up');
        // timeUp then replay game
        if(!timeUp){
            peephole();
        }
    },time)
}