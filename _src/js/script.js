let countDownDate = new Date("Apr 26, 2024 00:00:00").getTime();
let concerts = document.querySelector('#ticketmaster');
let tmApiKey = '2RIlBzDzNA3fNQnRjm3ZdMIOynOvhF0l';

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

fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=' + tmApiKey)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  })