const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];


// To replace array element using regexp the replace a, an , the with space.And Then sort an array into sort function defines inside the arrow function

const strip=(band)=>band.replace(/^(a |the |an )/i, '').trim();
bands.sort((band1,band2) => strip(band1)>strip(band2) ? 1:-1 );
const screen =document.querySelector('#bands');
screen.innerHTML =bands.map((band,i) =>`<li>${band}</li>`).join('');