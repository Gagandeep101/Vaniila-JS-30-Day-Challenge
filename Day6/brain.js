const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
fetch(endpoint)
    .then(response => response.json())
    .then(data => cities.push(...data));
function findMatches(wordtomatch, cities) {
    return cities.filter(places => {
        const regex = new RegExp(wordtomatch, 'gi');
        return places.city.match(regex) || places.state.match(regex);
    });
}
function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const list_html = matchArray.map(places => {
        const regex = new RegExp(this.value);
        const city_name=places.city.replace(regex,`<span class="highlight">${this.value}</span>`);
        const state_name=places.city.replace(regex,`<span class="highlight">${this.value}</span>`);
        return `
    <li>
    <span class="name">${city_name},${state_name}</span>
    <span class="population">${places.population}</span>
    </li>
    `}).join(" ");
    suggestionbox.innerHTML=list_html;
}