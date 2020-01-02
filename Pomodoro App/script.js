var interval = 1000;
var expected = Date.now() + interval;
var numMinutes = 50;
var numSeconds = 60;
minutesDisplay = document.getElementById('minutes');
secondsDisplay = document.getElementById('seconds');

setTimeout(step, interval); 

function step() {
        var dt = Date.now() - expected; 
        
        if (dt > interval) {

        }
        numSeconds--;
    
        if(numSeconds == 0){ 
            numMinutes--;
            numSeconds = 60;
            console.log('reset seconds')
        }
    
        secondsDisplay.innerText = numSeconds.toString();
        minutesDisplay.innerText = numMinutes.toString();

        expected += interval;
        setTimeout(step, Math.max(0, interval - dt));
        console.log('second passed')
    }














//let countdown;

// function timer(seconds){
//     const now = Date.now();
//     const then = now + seconds * 1000;
//     console.log({now, then});

//     setInterval(() => {
//         const secondsLeft = (then - Date.now()) / 1000;
//         // check if we should stop it
//         if(secondsLeft <= 0){
//             clearInterval(countdown);
//             return;
//         }
//         // display it
//         console.log(secondsLeft);
//     }, 1000);
// }

//const timerElement = document.getElementById('timer')

// let startTime
// function startTimer() {
//     timerElement.innerText = 0
//     startTime = new Date()
//     setInterval(() => {
//         getTimerTime()
//     }, 1000)
// }

// function getTimerTime(){
//     return Mathf.floor((new Date() - startTime) / 1000)
// }