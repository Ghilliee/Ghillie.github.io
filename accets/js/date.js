var tday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var tmonth=["January","February","March","April","May","June","July","August","September","October","November","December"];

function GetClock(){
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();

var clocktext=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+"";
document.getElementById('date').innerHTML=clocktext;
}

GetClock();
setInterval(GetClock,1000);
