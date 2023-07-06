// import slider screen
const slider=document.querySelector('.items');

// it is used when mouse leaves , down and put
let isdown =false;

// store position from left of slider
let startX;

// store how much we scroll
let scrolleft;


// in these eventListeners we use mousedown event for set the startX and scrolleft position w.r.t slider . Add class from css active
slider.addEventListener('mousedown', (e) => {
    isdown = true;
    slider.classList.add('active');
    startX=e.pageX-slider.offsetLeft;
    scrolleft=slider.scrollLeft
});


// in these eventListeners we use mouseleave event for set isdown to false and remove class from css active
slider.addEventListener('mouseleave', () => {
    isdown = false;
    slider.classList.remove('active');
});


// in these eventListeners we use mouseleave event for set isdown to false and remove class from css active
slider.addEventListener('mouseup', () => {
    isdown = false;
    slider.classList.remove('active');
});


// in these eventListeners we use mousemove event for set the startX and scrolleft position w.r.t each item from slider and scroll in X axis after moving cursor on slider in horizontal direction
slider.addEventListener('mousemove', (e) => {
    if (!isdown) return;
    e.preventDefault();
    const x=e.pageX-slider.offsetLeft;
    const walk=(x-startX)*0.5;
    slider.scrollLeft=scrolleft-walk;
});