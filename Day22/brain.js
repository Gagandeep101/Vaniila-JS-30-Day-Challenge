const nav=document.querySelector('#main');

//Get nav space from from the top of nav bar w.r.t to body

const topoffset=nav.offsetTop;

function fixnav(){

    // if top offset is less than equal to window scroll scroll to bottom
    if (topoffset<=window.scrollY) {
        document.body.classList.add('fix_nav');
    }
    else{
        document.body.classList.remove('fix_nav');
    }
}
window.addEventListener('scroll',fixnav);