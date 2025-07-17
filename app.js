//Get a reference to the start and stop button
const myButton = document.getElementById('my-button');

let timerStatus = false;

myButton.addEventListener('click', startTimer)

function appendZero(num){
    if(num < 10){
        num = num.toString();
        num = "0" + num;
        return num
    }
}

function startTimer(){
    if (timerStatus == false){
        setTime();
    } else {
        setTime();
    }
}

function setTime(){
    console.log('the function is working')

    let minutes = parseInt(document.getElementById('minutes').value, 10) || 0;

    let seconds = parseInt(document.getElementById('seconds').value, 10) || 0;

    console.log('timer is set for ' + minutes + ':' + seconds);

    document.getElementById('countdown').innerHTML = appendZero(minutes) + ':' + appendZero(seconds);
}