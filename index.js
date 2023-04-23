const hourElm = document.getElementById("hour");
const minuteElm = document.getElementById("minutes");
const secondElm = document.getElementById("seconds");
const ampmElm = document.getElementById("ampm");

function digiClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h > 12){
        h = h- 12
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourElm.innerText = h;
    minuteElm.innerText = m;
    secondElm.innerText = s;
    ampmElm, (innerText = ampm);
    setTimeout(()=>{
        digiClock()
    }, 1000)
}

digiClock();