const trigger =document.querySelectorAll('a');
const highlighted = document.createElement('span');
highlighted.classList.add('highlight');
document.body.append(highlighted);

function highlightlink() {
    const linkCoord=this.getBoundingClientRect();
    const coord={
        height: linkCoord.height,
        width: linkCoord.width,
        top:linkCoord.top+window.scrollY,
        left:linkCoord.left+window.scrollX
    }
    highlighted.style.height=`${coord.height}px`;
    highlighted.style.width=`${coord.width}px`;
    highlighted.style.transform=`translate(${coord.left}px,${coord.top}px)`;
}
trigger.forEach(a => a.addEventListener('mouseenter',highlightlink));