const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  const name = this.name;
  console.log(this.name);

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => {
  input.addEventListener('change', handleUpdate);
});
t;
inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate));
