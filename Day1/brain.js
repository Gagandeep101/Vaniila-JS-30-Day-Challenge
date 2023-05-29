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
window.addEventListener('keydown', playing);