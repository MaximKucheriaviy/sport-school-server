const date = document.querySelector(".dateinput");
const block = document.querySelector(".datespan");
date.addEventListener("input", (event) => {
  block.textContent = event.target.valueAsNumber;
});
