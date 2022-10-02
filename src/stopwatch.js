let hour = 0;
let min = 0;
let second = 0;


function time(){
    second++
    document.getElementById("second").innerText = second
}

export function start(){
    setInterval(()=>{time();},1000)
}
export function reset(){
    hour = 0;
    min = 0;
    second = 0;
}


{/* <div class="div-stopwatch">
            <p><span id="hour">00</span>:<span id="minute">00</span>:<span id="second">00</span></p>
        </div> */}