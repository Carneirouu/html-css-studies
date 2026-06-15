//
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const ampmElement = document.getElementById('ampm');

const watch = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    let ampm;

    if (hr <= 12) {
        ampm = "AM";
    } else {
        ampm = "PM";
    }

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = s;
    ampmElement.textContent = ampm;
}, 1000);