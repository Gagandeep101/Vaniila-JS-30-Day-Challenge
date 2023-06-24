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
    console.log(coord);
}
trigger.forEach(a => a.addEventListener('mouseenter',highlightlink));