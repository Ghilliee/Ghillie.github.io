// Set the date we're counting down to
const countDownDate1 = new Date("Nov 18, 2019 22:00:00").getTime();

// Set the date we're counting down to
const countDownDate2 = new Date("Nov 26, 2019 22:00:00").getTime();

// Set the date we're counting down to
const countDownDate3 = new Date("Dec 3, 2019 22:00:00").getTime();

// Set the date we're counting down to
const countDownDate4 = new Date("Dec 10, 2019 22:00:00").getTime();

// Set the date we're counting down to
const countDownDate5 = new Date("Dec 17, 2019 22:00:00").getTime();

// Set the date we're counting down to
const countDownDate6 = new Date("Dec 24, 2019 22:00:00").getTime();

// Set the date we're counting down to
const countDownDate7 = new Date("Dec 31, 2019 22:00:00").getTime();

// Set the date we're counting down to
const countDownDate8 = new Date("Jan 7, 2020 22:00:00").getTime();

// Set the date we're counting down to
const countDownDate9 = new Date("Jan 14, 2020 22:00:00").getTime();

// Set the date we're counting down to
const countDownDate10 = new Date("Jan 21, 2020 22:00:00").getTime();

// Set the date we're counting down to
const countDownDate11 = new Date("Jan 28, 2020 22:00:00").getTime();

// Set the date we're counting down to
const countDownDate12 = new Date("Feb 4, 2020 22:00:00").getTime();

// Set the date we're counting down to
const countDownDate13 = new Date("Feb 11, 2020 22:00:00").getTime();

// Date for week 14
const countDownDate14 = new Date("Feb 18, 2020 22:00:00").getTime();

// Set the date we're counting down to
const countDownDate15 = new Date("Feb 25, 2020 22:00:00").getTime();

// Set the date we're counting down to
const countDownDate16 = new Date("Mar 3, 2020 22:00:00").getTime();

function updateCountdownElement(elementId, targetDate) {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = targetDate - now;

  // If the count down is finished, write some text
  if (distance < 0) {
    document.getElementById(elementId).innerHTML = "RELEASED";
    return;
  }

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
//< Turn this on when the next operation comes out  document.getElementById(elementId).innerHTML = days + "d " + hours + "h "
//  + minutes + "m " + seconds + "s ";
}

function updateAll() {
  this.updateCountdownElement("weektimer1", countDownDate1);
  this.updateCountdownElement("weektimer2", countDownDate2);
  this.updateCountdownElement("weektimer3", countDownDate3);
  this.updateCountdownElement("weektimer4", countDownDate4);
  this.updateCountdownElement("weektimer5", countDownDate5);
  this.updateCountdownElement("weektimer6", countDownDate6);
  this.updateCountdownElement("weektimer7", countDownDate7);
  this.updateCountdownElement("weektimer8", countDownDate8);	
  this.updateCountdownElement("weektimer9", countDownDate9);
  this.updateCountdownElement("weektimer10", countDownDate10);
  this.updateCountdownElement("weektimer11", countDownDate11);
  this.updateCountdownElement("weektimer12", countDownDate12);
  this.updateCountdownElement("weektimer13", countDownDate13);
  this.updateCountdownElement("weektimer14", countDownDate14);
  this.updateCountdownElement("weektimer15", countDownDate15);
  this.updateCountdownElement("weektimer16", countDownDate16);
}

setInterval(updateAll, 1000);
