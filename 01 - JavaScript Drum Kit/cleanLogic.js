window.addEventListener('keydown', playSound);

function playSound(e) {
  let keyToFind = e.keyCode;
  const audio = document.querySelector(`audio[data-key='${keyToFind}'`);
  const key = document.querySelector(`.key[data-key='${keyToFind}'`);
  if (!key) return;
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
  key.addEventListener('transitionend', removeTransition);
});
