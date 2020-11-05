// Grab all of the inputs from the html page
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  console.log(this.value);
}

// For each input, when you see a change, handle that change
inputs.forEach((input) => {
  input.addEventListener('change', handleUpdate);
});
// Change when you move over the input
inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate));
