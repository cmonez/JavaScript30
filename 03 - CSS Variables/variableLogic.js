// Grab all of the inputs from the html page
const inputs = document.querySelectorAll('.controls input');

/* <input
  id="blur"
  type="range"
  name="blur"
  min="0"
  max="25"
  value="10"
  data-sizing="px"
/>; */

function handleUpdate() {
  // What is dataset? grabs all the data from this data object
  // i.e returns {sizing: px} --> delineated as "data-sizing: px"
  // console.log(this.dataset);
  const suffix = this.dataset.sizing || '';
  const name = this.name; // Notice how each input has a name property ass well
  console.log(this.name);

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
  // console.log(suffix);
}

// For each input, when you see a change, handle that change
inputs.forEach((input) => {
  input.addEventListener('change', handleUpdate);
});
// Change when you move over the input
inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate));
