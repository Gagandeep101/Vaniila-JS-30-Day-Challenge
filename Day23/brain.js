const div = document.querySelectorAll('div');
function logText(e) {
    // it show present itself classlist value not its parent class
    e.stopPropagation();
    console.log(this.classList.value);
}
div.forEach(div_ele => {
    // whenever we click on the div it class of itself and shows his parent div classes
    div_ele.addEventListener('click', logText, {

        // capture false means when we click on childest div tags it shows the class from child div tag to parent div tag
        capture: false,
        // capture false means when we click on childest div tags it shows the class from parent div tag to child div tag
        capture: true,
        // once is used to click on any tag at one time
        once: true
    });
});