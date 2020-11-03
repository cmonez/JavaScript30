// Grab the second hand
const secondHand = document.querySelector('.second-hand');

function setDate() {
  // Creates a date object
  const now = new Date();
  const seconds = now.getSeconds();
  // console.log(seconds);
  // Want to convert the second into degrees for the css transition
  const secondsDegrees = (seconds / 60) * 360;
  // Rotate second hand by the current second transformed into degrees
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

// setInterval will run a given function for the time that you give it;
// Since this is updated every second, the secondhand will be current
setInterval(setDate, 1000);
