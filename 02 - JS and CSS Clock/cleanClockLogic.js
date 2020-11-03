const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  let hour = now.getHours();
  hour = convertHour(hour);

  const hoursDegrees = (hour / 12) * 360 + 90;
  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
function convertHour(inputHour) {
  if (inputHour > 12) return inputHour - 12;
  else return inputHour;
}

setInterval(setDate, 1000);
