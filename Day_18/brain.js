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

  // Map the event into results go inside into speechRecognitionResults to transcript and then join all of them with space
  const transcript= Array.from(e.results).map(results => results[0]).map(result => result.transcript).join(' ');

  // Check if e.results[0].isFinal is true then create a new element of paragraph and then append into words
  if(e.results[0].isFinal){
    p= document.createElement('p');
    p.textContent = transcript;
    words.appendChild(p);
  }
});

// When recognition are stopped we restart again using recognition.start
recognition.addEventListener('end',recognition.start);
recognition.start();