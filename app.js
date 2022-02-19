var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

timer = false;

function start() {
    timer = true;
    stopwatch();
    document.getElementById("start").style.display = "none";
    document.getElementById("stop").style.display = "inline-block";
};

function stop() {
    timer = false;
    document.getElementById("stop").style.display = "none";
    document.getElementById("start").style.display = "inline-block";
    document.getElementById("reset").style.display = "inline-block";
};

function reset() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById("count").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("start").style.display = "inline-block";
    document.getElementById("reset").style.display = "none";
    document.getElementById("stop").style.display = "none";
}

function stopwatch() {
    if (timer == true){
        count = count + 1;
        document.getElementById("count").innerHTML = count
        setTimeout("stopwatch()", 10)

        if (count == 100){
            sec += 1;
            count = 0
            document.getElementById("sec").innerHTML = sec
        }
        if (sec == 60){
            sec = 0
            min += 1;
            document.getElementById("min").innerHTML = min
        }
        if (min == 60){
            min = 0;
            hr += 1;
            document.getElementById("hr").innerHTML = hr

        }

    }
}

