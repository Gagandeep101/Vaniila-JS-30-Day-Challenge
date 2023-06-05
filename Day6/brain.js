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
