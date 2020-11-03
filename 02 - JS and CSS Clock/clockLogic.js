function setDate() {
  // Creates a date object
  const now = new Date();
  const seconds = now.getSeconds();
  // console.log(seconds);
  // Want to convert the second into degrees for the css transition
  const secondsDegrees = (seconds / 60) * 360;
}

// setInterval will run a given function for the time that you give it;
setInterval(setDate, 1000);
