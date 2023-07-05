const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lasthole=false;

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
