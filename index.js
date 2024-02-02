const time =document.querySelector(".time");
const play = document.querySelector(".play");
const stope  = document.querySelector(".stop");
const reset = document.querySelector(".reset");

let [ miliseconds, seconds, minutes, hours] = [0,0,0,0];
let somoy = null;

play.addEventListener("click", ()=>{
    if(somoy !== null){
        clearInterval(somoy);
    }
  somoy =  setInterval(stopwt, 10);
  
})

stope.addEventListener("click", ()=>{
clearInterval(somoy);

})

reset.addEventListener("click", ()=>{
    clearInterval(somoy);
    [ miliseconds, seconds, minutes, hours] = [0,0,0,0];
    time.innerHTML= "00:00:00:000"
    
})

function stopwt(){
    miliseconds +=10;
    if(miliseconds==1000){
        miliseconds=0
        seconds++;
        if(seconds==60){
            seconds=0;
            minutes++;
            if(minutes==60){
                minutes=0;
                hours++;
    }
   
        }
    }
    let h = hours <10 ? "0" + hours : hours;
    let m = minutes <10 ? "0" + minutes : minutes;
    let s = seconds <10 ? "0" + seconds : seconds;
    let mi = 
    miliseconds <10
     ? "0" + miliseconds 
     : miliseconds<100 
     ? "0" + miliseconds 
     : miliseconds;
    time.innerHTML = `${h} : ${m} :  ${s} :  ${mi}`;
}
