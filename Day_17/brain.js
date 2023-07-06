// Convert lit items which is node into arrays
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

// Convert the time nodes into min and sec . Add sum to give total seconds
const second = timeNodes.map(nodes => nodes.dataset.time).map(timeNodes => {
    const [min, sec] = timeNodes.split(':').map(parseFloat);
    return min * 60 + sec;
}).reduce((total, seconds) => total + seconds);
let secondleft = second;

// Convert seconds to hours
const hours = Math.floor(secondleft / 3600);

// remove hours value in seconds from total seconds
secondleft = secondleft % 3600;

// Convert seconds to min
const min = Math.floor(secondleft / 60);

// remove minutes value in seconds from total seconds
secondleft = secondleft % 60;

console.log(hours, min, secondleft);

