const hide = document.querySelector(".modal");
const blur = document.querySelector(".whole");
const body = document.querySelector(".bodyflow");

function user() {
  console.log("");
  hide.classList.add("hidden");
  blur.classList.remove("whole");
  body.classList.remove("bodyflow");
  // event.preventDefault();
}
function client() {
  // event.preventDefault();
  // hide.classList.add("hidden");
  // blur.classList.remove("whole");
  // body.classList.remove("bodyflow");
}
