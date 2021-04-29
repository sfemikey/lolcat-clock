var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

var time = new Date().getHours();
var updateClock = function() {

var timeEventJs = document.getElementById("timeEvent");
var lolcat = document.getElementById("lolcat");
var image = "https://i.ibb.co/5Fdz3zk/partycat.jpg";

if (time == partyTime){
    messageText = "IZ PARTEE TIME!!";
    image = "https://i.ibb.co/5Fdz3zk/partycat.jpg";

} else if (time == napTime) {
    messageText = "IZ NAP TIME...";
    image = "https://i.ibb.co/XWc3bWj/catnapping-3.jpg";

} else if (time == lunchTime) {
    messageText = "IZ NOM NOM NOM TIME!!";
    image = "https://i.ibb.co/bX2xYLp/cat-eating.png";

} else if (time == wakeupTime) {
    messageText = "IZ TIME TO GETTUP.";
    image = "https://i.ibb.co/z7smCkm/wake-upcat.jpg";

} else if (time < noon) {
    messageText = "Good morning!";
    image = "https://i.ibb.co/QXVrpW8/goodmorning.jpg";

} else if (time > evening) {
    messageText = "Good Evening!";
    image = "https://i.ibb.co/g7BhHMW/catsleeping.jpg";

} else {
    messageText = "Good afternoon!";
    image = "https://i.ibb.co/drZSMzt/coolcat.jpg";
}

timeEventJs.innerText = messageText;
lolcat.src = image;

	showCurrentTime();

};

var showCurrentTime = function() {
     // display the string on the webpage
     var clock = document.getElementById('clock');

     var currentTime = new Date();
     var hours = currentTime.getHours();
     var minutes = currentTime.getMinutes();
     var seconds = currentTime.getSeconds();
     var meridian = "AM";

     // Set Hours
     if (hours >= noon){
          meridian = "PM";
     }

     if (hours > noon){
          hours = hours - 12;
     }

     // Set Minutes
     if (minutes < 10){
          minutes = "0" + minutes;
     }

     // Set Seconds
     if (seconds < 10){
          seconds = "0" + seconds;
     }

     // put together the string that displays the time
     var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

     clock.innerText = clockTime;
};

updateClock();

var oneSecond = 1000;

var partyTimeButton = document.getElementById("partyTimeButton");

var isPartyTime = false;
var partyEvent = function()
{
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
	   partyTimeButton.innerText = "PARTY TIME!";
	   partyTimeButton.style.backgroundColor= "rgba(255,0,255,0.3)";
 }
   else {
      isPartyTime = false;
      time = new Date().getHours();
	   partyTimeButton.innerText = "PARTY IS OVER!";
	   partyTimeButton.style.backgroundColor= "rgba(0,0,255,0.3)";
   }
};

partyTimeButton.addEventListener("click", partyEvent);


var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var wakeUpEvent = function()
{
    wakeUpTimeSelector = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);

var lunchTimeSelector =  document.getElementById("lunchTimeSelector");
var lunchTimeEvent = function()
{
    lunchTimeSelector = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener('change', lunchTimeEvent);

var napTimeSelector =  document.getElementById("napTimeSelector");
var napTimeEvent = function()
{
    napTimeSelector = napTimeSelector.value;
};
napTimeSelector.addEventListener('change', napTimeEvent);

setInterval( updateClock, oneSecond);
