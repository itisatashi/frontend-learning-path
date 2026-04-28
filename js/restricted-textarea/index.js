const textarea = document.querySelector("textarea");
const counter = document.querySelector(".counter");
const wrapper = document.querySelector(".textarea-wrapper");

textarea.addEventListener("input", function () {
  const currentLength = textarea.value.length;

  counter.textContent = `${currentLength} / 250`;

  if (currentLength === 250) {
    wrapper.classList.add("limit");
  } else {
    wrapper.classList.remove("limit");
  }
});
