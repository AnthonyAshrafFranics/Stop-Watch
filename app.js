var min = 0, sec = 0, msec = 0;
var minutes = document.getElementById('mins');
var seconds = document.getElementById('sec');
var miliSeconds = document.getElementById('msec');
var interval;

function timer(){
    miliSeconds.innerHTML = msec;
    msec++;
    if(msec >= 100){
        sec++;
        seconds.innerHTML = sec;
        msec = 0;
    } else if(sec >= 60) {
        min++;
        minutes.innerHTML = min;
        sec = 0;
    }
}

function start() {
    interval = setInterval(timer,10);
    var btn = document.getElementById("btn");
    btn.disabled = true;
}
function pause() {
    clearInterval(interval);
    var btn = document.getElementById("btn");
    btn.disabled = false;
}
function reset(){
    msec = 0;
    sec = 0; 
    min = 0;
    miliSeconds.innerHTML = msec;
    seconds.innerHTML = sec;
    minutes.innerHTML = min;
    pause();
}



