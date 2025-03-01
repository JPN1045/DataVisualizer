const API_KEY = '6b336c70-684b-409c-acb4-e8894d1820a9';
const API_URL = 'https://api.cricapi.com/v1/matches?apikey=${API_KEY}';

function fetchCricketData() {
    return fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            if (!data.status || !data.data) throw new Error("Invalid cricket data");
            return data.data;
        })
}