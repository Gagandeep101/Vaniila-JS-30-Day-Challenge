// import all nav item from html
const triggers = Array.from(document.querySelectorAll('.cool>li'));
// import dropdown background
const background = document.querySelector('.dropdownBackground');
// import nav bar
const nav = document.querySelector('.top');
function handleenter() {
    // add trigger-enter class to parent
    this.classList.add('trigger-enter');
    setTimeout(() => {
        // add trigger-enter-active after adding trigger-enter after 1.5 sec
        if (this.classList.contains('trigger-enter')) {
            this.classList.add('trigger-enter-active')
        }
    }, 150);
    background.classList.add('open');
    const dropdown = this.querySelector('.dropdown');
    // dropdown position w.r.t to body 
    const dropdowncoord = dropdown.getBoundingClientRect();
    
    // navbar position w.r.t to body 
    const navcoord = nav.getBoundingClientRect();
    const coord = {
        height: dropdowncoord.height,
        width: dropdowncoord.width,
        top: dropdowncoord.top - navcoord.top,
        left: dropdowncoord.left - navcoord.left
    }
    background.style.setProperty('width', `${coord.width}px`);
    background.style.setProperty('height', `${coord.height}px`);
    background.style.setProperty('right', `${coord.right}px`);
    background.style.setProperty('transform', `translate(${coord.left}px , ${coord.top}px)`);
}
function handleleave() {
    // remove the the added classes parents and background
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}
// when mouse on nav bar then implement handleenter otherwise handleleave
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleenter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleleave));