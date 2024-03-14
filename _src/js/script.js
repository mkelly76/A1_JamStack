let countDownDate = new Date("Apr 26, 2024 00:00:00").getTime();
let concerts = document.querySelector('#ticketmaster');
let tmApiKey = '2RIlBzDzNA3fNQnRjm3ZdMIOynOvhF0l';
const client_id = '7e8edb27c26b4cbb977ebdd229614081';
const client_secret = '67a4d39645b24b1f9184a9c3f1579491';

let access_token;
async function getAccessToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
    },
    body: 'grant_type=client_credentials'
  });
  const data = await response.json();
  access_token = data.access_token;
}
getAccessToken();


let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Watch on HULU!";
    }
}, 1000);

const fetch = require('node-fetch');

const url = 'https://spotify23.p.rapidapi.com/artist_albums/?id=58lV9VcRSjABbAbfWS6skp&offset=0&limit=100';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'edfebef2afmsh19785f980d6d183p1b1b91jsn3179a1b345b6',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}


fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=' + tmApiKey)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  })