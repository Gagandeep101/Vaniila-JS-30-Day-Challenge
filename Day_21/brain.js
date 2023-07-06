const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

// set message SpeechSynthesisUtterance text propety with textarea text 
msg.text = document.querySelector('[name="text"]').value;

function populateVoice() {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices.map(voice => `<option value="${voice.name}">${voice.name} ${voice.lang}</option>`);
    toogle();
}
speechSynthesis.addEventListener('voiceschanged', populateVoice);


//Change the voice of speech when the user selects from the dropdown menu 
function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toogle();
}
voicesDropdown.addEventListener('change', setVoice);

// using this function the voice will speech again the text according to selected voice from the dropdown menu
function toogle(startover = true) {
    speechSynthesis.cancel();
    if (startover) {
        speechSynthesis.speak(msg);
    }
}

// change the properties of speechsynthesis speak and stop using button name and its value
function setOptions() {
    msg[this.name] = this.value;
    toogle();
}

options.forEach(option => option.addEventListener('change', setOptions));
speakButton.addEventListener('click', toogle);
stopButton.addEventListener('click', () => toogle(false));


