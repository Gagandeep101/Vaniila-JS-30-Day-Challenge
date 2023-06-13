// In debounce function wait for 20 time scroll events before make visible image visible
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
function check_slider() {
    slide_in.forEach(slideImage => {

        // Go half way of image height through scroll the window
        
        const slide_in_at = (window.scrollY + window.innerHeight) - slideImage.height / 2;
        
        // Go to bottom of image height through scroll the window

        const slide_bottom = slideImage.offsetTop + slideImage.height;
        const isHalfShown = slide_in_at > slideImage.offsetTop;
        const isnotScrolledMid = window.scrollY < slide_bottom;
        if (isHalfShown && isnotScrolledMid) {
            slideImage.classList.add('active');
        } else {
            slideImage.classList.remove('active');
    
        }
    });
}
const slide_in = document.querySelectorAll('.slide-in');
window.addEventListener('scroll', debounce(check_slider));