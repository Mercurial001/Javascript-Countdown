const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "july",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

const dateDescription = document.querySelector(".event-date-description");
const countDown = document.querySelector(".countdown");
const time = document.querySelectorAll(".time");

let futureDate = new Date(2025, 5, 18, 18, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()]

dateDescription.textContent = `Event Starts on ${weekday} ${month}, ${date} ${year}, ${hours}:${minutes} PM`;

const futureTime = futureDate.getTime()

function getRemainingTime() {
    const presentTime = new Date().getTime();
    const differenceTime = futureTime - presentTime;
    const seconds = differenceTime / 1000;
    // values in MiliSeconds
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60 * 1000;
    // calculate all values
    let days = differenceTime / oneDay
    days = Math.floor(days)
    let hours = (differenceTime % oneDay) / oneHour
    hours = Math.floor(hours)
    let minutes = Math.floor((differenceTime % oneHour) / oneMinute)
    let second = Math.floor((differenceTime % oneMinute) / 1000);
    // set array
    const values = [days,hours,minutes,second]

    function format(item){
        if(item < 10 ){
            return item = `0${item}`
        }
        return item
    }

    time.forEach(function(timeBox, index){
        timeBox.innerHTML = format(values[index]);
    });

    if( differenceTime < 0 ) {
        clearInterval(countdown)
        countDown.innerHTML = `<h4 class="expired">Event has passed!</h4>`;
    }
}

// countdown 

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();