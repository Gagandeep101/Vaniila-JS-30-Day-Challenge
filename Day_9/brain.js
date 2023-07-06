const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

const p = document.querySelector('p');
function makeGreen() {
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular

console.log('Hello');

// Interpolated

console.log('Hello I am %s developer', "web");

// Styled
console.log('Hello I am %s ', "%cweb", "color:red ;font-Size:20px;");

// warning!
console.warn('Oh No I am giving you warning');
// Error :|
// console.error('Oh No I am giving you error');

// Info
console.info('Crocodiles eat 3-4 people per year');
// Testing
console.assert(p.classList.contains('ouch'), "That is worng");
// clearing
console.clear();
// Viewing DOM Elements

console.dir(p);

// Grouping together

dogs.forEach(dogs => {
    console.groupCollapsed(`${dogs.name}`);
    console.log(`My dog name is ${dogs.name}`);
    console.log(`My dog name is ${dogs.name} and age is ${dogs.age}`);
    console.groupEnd(`${dogs.name}`);
});


// counting

console.count("Hello World!");
console.count("Hello World!");
console.count("Hello World!");
console.count("Hello World!");
// timing

console.time('fatching data');
fetch('https://api.github.com/users/Gagandeep101').then(data=>data.json()).then(data=>console.log(data));
console.timeEnd('fatching data');