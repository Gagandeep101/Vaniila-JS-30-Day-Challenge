const canvas = document.querySelector('#draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
ctx.strokeStyle = "Black";
ctx.lineJoin = "round";
ctx.lineCap = 'round';
let isdrawing = false;
let lastX = 0;
let lastY = 0;
let hue=0;
let direction = true;
function draw(e) {
    if (!isdrawing) {
        return
    }
    ctx.beginPath();
    ctx.strokeStyle = `hsl(${hue}, 90%, 50%)`;
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
    hue++;
    if (hue===359) {
        hue=0;
    }
    if (ctx.lineWidth >=100 || ctx.lineWidth <=1) {
        direction = !direction;
    }
    if (direction) {
        ctx.lineWidth++;
    }
    else{
        ctx.lineWidth--;
    }
}

// By Using four event listener we see position at which mouse is clicked to that position when the mouse is over
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
    isdrawing = true
    lastX = e.offsetX;
    lastY = e.offsetY;
});
canvas.addEventListener("mouseup", () => isdrawing = false);
canvas.addEventListener("mouseout", () => isdrawing = false);
