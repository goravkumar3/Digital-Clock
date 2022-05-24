var main=document.getElementById("main");
var heading=document.createElement("h1");
main.appendChild(heading);
heading.setAttribute("class", "show")
function printTime(){
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var seasion="AM";
    if(hours==0){
        hours=12;
    }
    if(hours>12){
       hours=hours-12;
       seasion="PM";
    }
    // hours=(hours<10)?"0"+hours:hours;
    // minutes=(minutes<10)?"0"+minutes:minutes;
    // seconds=(seconds<10)?"0"+seconds:seconds;
    heading.innerHTML=hours+" : "+minutes+" : "+seconds+" "+seasion;
}
setInterval(printTime,1000);