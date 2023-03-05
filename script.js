const meaning = document.querySelector('.outputResult')
const start = document.querySelector('.start')
const pause = document.querySelector('.pause')
const reset = document.querySelector('.reset')

let timerValue;
let counter = 0;

start.onclick = function() {
    timerValue = setInterval(function() {
        counter ++;
        meaning.innerText = counter;
    }, 1000);
};

pause.onclick = function() {
    clearInterval(timerValue);
};

reset.onclick = function() {
    counter = 0;
    meaning.innerText = counter;
    clearInterval(timerValue);
};