window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Use speechRecognition object and change its property interimResults and language

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

// Use paragaraph element and append in words div tags
let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

// Add event listeners on recognition after completing speech show results
recognition.addEventListener('result', e => {
  console.log(e);
});
recognition.start();