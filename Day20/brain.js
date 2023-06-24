const trigger =document.querySelectorAll('a');
const highlighted = document.createElement('span');
highlighted.classList.add('highlight');
document.body.append(highlighted);

function highlightlink() {
    const linkCoord=this.getBoundingClientRect();
    console.log(linkCoord);
}
trigger.forEach(a => a.addEventListener('mouseenter',highlightlink));