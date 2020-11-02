window.addEventListener('keydown', (e) => {
  // Grab the current key code (from a key down)
  let keyToFind = e.keyCode;
  // querySelector to grab the audio element at the given key
  const audio = document.querySelector(`audio[data-key='${keyToFind}'`);
  // querySelector to grab dom element with class key
  const key = document.querySelector(`.key[data-key='${keyToFind}'`);
  // console.log('Heres the key', key);
  // console.log('Here is the audio', audio);
  if (!key) return;
  if (!audio) return;
  console.log(key.classList); //return class attributes of a specified element

  key.classList.add('playing'); //add playing class from css file
  audio.currentTime = 0; // audio.currentTime = 0 -> this resets the audio to 0 so that it will restart at zero (aka rewind)
  audio.play(); // Grabbing whole audio div, and playing it; audio.play -> if clicked while audio playing will NOT rewind
});
