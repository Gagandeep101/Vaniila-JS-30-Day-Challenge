function playing(e){
    let sound = this.document.querySelector(`audio[data-key="${e.keyCode}"]`)
    let key = this.document.querySelector(`.sound_item[data-key="${e.keyCode}"]`)
    sound.currentTime = 0;
    console.log(key);
    if (!sound) {
        return;
    }
    sound.play();
    key.classList.add("playing");
}
function remove_effects(e) {
    if(e.propertyName !== "transform" ){
        return;
    }
    this.classList.remove("playing");
}
let keys=document.querySelectorAll(".sound_item");
keys.forEach(key => key.addEventListener("transitionend",remove_effects));
window.addEventListener('keydown', playing);