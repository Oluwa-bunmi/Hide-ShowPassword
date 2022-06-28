let eyes = document.querySelectorAll(".fa-eye");
let firstIcon = document.getElementById("closed");
let secondIcon = document.getElementById("close");
firstIcon.onclick = function () {
  firstIcon.classList.toggle("fa-eye-slash");
};
secondIcon.onclick = function () {
  secondIcon.classList.toggle("fa-eye-slash");
};
eyes.forEach((eye) =>
  eye.addEventListener("click", (event) => {
    let inputtype, input;
    input = event.target.closest(".form-group").querySelector("input");
    inputtype = input.getAttribute("type");
    if (inputtype === "password") {
      input.setAttribute("type", "text");
    } else if (inputtype === "text") {
      input.setAttribute("type", "password");
    } else {
      input.setAttribute("type", "text");
    }
  })
);
