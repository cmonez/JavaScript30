// Grab the second hand
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  // Creates a date object
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  let hour = now.getHours();
  // console.log(now);
  // console.log(hour);

  hour = convertHour(hour);
  // console.log('Minutes', minutes);
  // console.log(seconds);
  // Want to convert the second into degrees for the css transition
  // Add 90 degrees to offset
  const hoursDegrees = (hour / 12) * 360 + 90;
  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minutesDegrees = (minutes / 60) * 360 + 90;
  // Rotate second hand by the current second transformed into degrees
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
function convertHour(inputHour) {
  if (inputHour > 12) return inputHour - 12;
  else return inputHour;
}
// setInterval will run a given function for the time that you give it;
// Since this is updated every second, the secondhand will be current
setInterval(setDate, 1000);
