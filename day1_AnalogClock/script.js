const numberHours = document.querySelector(".number-hours");
const barSeconds = document.querySelector(".bar-seconds");

const numberElement = [];
const barElement = [];

//create number of hours
for(let i = 1; i <= 12; i++){
    numberElement.push(
        `<span style="--index:${i};"><p>${i}</p></span>`
    );
}

numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));

//create number of seconds
for(let i = 1; i <= 60; i++){
    barElement.push(
        `<span style="--index:${i}";><p>${i}</P></span>`
    );
}

barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""));

const handHours = document.querySelector(".hand.hours");
const handMinutes = document.querySelector(".hand.minutes");
const handSeconds = document.querySelector(".hand.seconds");

function getCurrentTime() {
    let date = new Date();
    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();

    // -----------------------------------------------------
    // 60 seconds = 360deg so 1 sec = 360/60 = 6deg
    // 60 Minutes = 360deg so 1 min = 360/60 = 6deg
    // 12 hours = 360deg so 1 hr = 360/12 = 30deg

    // 1 hrs = 30deg that means 60 min = 30deg so 1 min = 30/60 = 0.5deg

    // so formula for hours is (hours * 30 + min / 2)
    // -----------------------------------------------------

    handHours.style.transform = `rotate(${currentHours * 30 + currentMinutes / 2}deg)`;
    handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
    handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;
}

// call getCurrentTime function on page load
getCurrentTime();

//call getcurrenttime function every second
setInterval(getCurrentTime, 1000); //1000s - 1s

