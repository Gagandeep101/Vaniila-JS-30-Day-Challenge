const hero =document.querySelector('.hero');
const text=hero.querySelector('h1');
const walk=500;
function show(e){
    
    // get hero screen width and height
    const {offsetWidth:width, offsetHeight:height}=hero;

    // get event x position and y position
    let {offsetX:x,offsetY:y}=e;

    if (this!=e.target) {
        x=x+e.target.offsetLeft;
        y=y+e.target.offsetTop;
    }
    const shadowwidth =Math.round((x/width*walk) - (walk/2));
    const shadowheight =Math.round((y/height*walk) - (walk/2));
text.style.textShadow=`${shadowwidth}px ${shadowheight}px 0 red,${shadowwidth}px ${shadowheight*-1}px 0 blue,${shadowwidth*-1}px ${shadowheight}px 0 #ba55d3 ,${shadowwidth*-1}px ${shadowheight*-1}px 0 #7CFC00	 `;    

}
hero .addEventListener('mousemove',show);