function appendZero(num){
    if(num < 10){
        num = num.toString();
        num = "0" + num;
        return num;
    }else{
        return num.toString();
    }
}

function startTimer(){
    if (countdownActive === false){
        document.getElementById('start-button').innerHTML = 'Pause';
        let totalTime = 0;
        if (savedTime === 0){
            let seconds = parseInt(document.getElementById('seconds').value, 10) || 0;
            let minutes = parseInt(document.getElementById('minutes').value, 10) || 0;
            totalTime = (minutes * 60) + seconds;

        } else {

            totalTime = savedTime
        }
        countdownActive = true;
        countDown(totalTime);
    } else {
        countdownActive = false;
        document.getElementById('start-button').innerHTML = 'Resume';
    }
}


function countDown(totalTime) {
    if (countdownActive === false) {
        clearTimeout(timeoutID);
        savedTime = totalTime;
        return;
    }

    let minutes = parseInt(totalTime / 60);
    let seconds = totalTime % 60;
    document.getElementById('countdown').innerHTML = appendZero(minutes) + ':' + appendZero(seconds);

    if (totalTime === 0) {
        return;
    }

    timeoutID = setTimeout(function () {
        countDown(totalTime - 1);
    }, 1000);
}

function resetTimer(){
    clearTimeout(timeoutID);
    totalTime = 0;
    savedTime = 0;
    countdownActive = false;
    document.getElementById('start-button').innerHTML = 'Start';
    document.getElementById('countdown').innerHTML = appendZero(0) + ':' + appendZero(0);

}

//Get a reference to the start and stop button
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');

let countdownActive = false;
let savedTime = 0;
let timeoutID;

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer)
