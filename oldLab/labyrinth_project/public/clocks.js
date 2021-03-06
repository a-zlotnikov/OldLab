
function zero_first_format(value)
{
    if (value < 10)
    {
        value='0'+value;
    }
    return value;
}

function date_time()
{
    const current_datetime = new Date();
    const day = zero_first_format(current_datetime.getDate());
    const month = zero_first_format(current_datetime.getMonth()+1);
    const year = current_datetime.getFullYear();
    const hours = zero_first_format(current_datetime.getHours());
    const minutes = zero_first_format(current_datetime.getMinutes());
    const seconds = zero_first_format(current_datetime.getSeconds());

    return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
}

setInterval(function () {
    document.getElementById('current_date_time_block2').innerHTML = date_time();
}, 1000);

let count=0;
let timer;

function timeCount() {
    document.getElementById("countTime").innerHTML = count.toString();
    count++;
    timer = window.setTimeout(function(){ timeCount() },1000);
}

function startCount() {
    if (!timer)
        timeCount();
    protocol.push(document.querySelector('#experimentName').value);
    protocol.push(document.querySelector('#experimentNumber').value);
    protocol.push(document.querySelector('#mouseNumber').value);
}

function stopCount() {
    if (timer) {
        clearTimeout(timer);
        timer=null;
        count=0
    }
}

