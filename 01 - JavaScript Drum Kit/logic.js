window.addEventListener('keydown', (e) => {
  // Grab the current key code (from a key down)
  let keyToFind = e.keyCode;
  // querySelector to grab the audio element at the given key
  const audio = document.querySelector(`audio[data-key='${keyToFind}'`);
  if (!audio) return;
  // console.log('Here is the audio', audio);
  // Grabbing whole audio div, and playing it:
  audio.play();
});
