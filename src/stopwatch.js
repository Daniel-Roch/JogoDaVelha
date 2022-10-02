let hour = 0;
let min = 0;
let second = 0;

let cron;
let totalTime;


function time(){
    second++
    if(`${second}`.length == 1){
        document.getElementById("second").innerText = `0${second}`
    }else{
        document.getElementById("second").innerText = second
    }

    if(second == 60){
        second = 0;
        min++;
        if(`${min}`.length == 1){
            document.getElementById("min").innerText = `0${min}`
        }else{
            document.getElementById("min").innerText = min
        }
    }if(min == 60){
        min = 0;
        hour++
        if(`${hour}`.length == 1){
            document.getElementById("hour").innerText = `0${hour}`
        }else{
            document.getElementById("hour").innerText = hour
        }
    }
}

export function start(){
    cron = setInterval(()=>{time();},1000)
}
export function reset(){

    totalTime = `${document.getElementById("hour").innerText}:${document.getElementById("min").innerText}:${document.getElementById("second").innerText}`
    document.getElementById("hourTotal").innerText = totalTime
    
    hour = 0;
    min = 0;
    second = 0;
    clearInterval(cron)

    document.getElementById("second").innerText = '00'
    document.getElementById("min").innerText = '00'
    document.getElementById("hour").innerText = '00'
    
}