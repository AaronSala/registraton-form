const form = document.querySelector(".register-form");
const submit = document.querySelector(".button");
const error = document.querySelector(".error");
const names = document.querySelectorAll(".form-control");

// const inputName = form.querySelector('[name="name"]');

submit.addEventListener("click", (e) => {
  e.preventDefault();
  names.forEach((input) => {
    if (input.value === "") {
      input.style.border = "1px solid red";
    } else {
      input.style.border = "1px solid green";
    }
    error.style.display = "block";
    error.innerHTML = "fill all the fields";

    input.addEventListener("input", () => {
      if (input.value.length < 3) {
        input.style.border = "1px solid red";
      } else {
        input.style.border = "1px solid green";
      }
    });
  });

  if (
    names[4].value !== names[5].value ||
    names[4].value == "" ||
    names[5].value == ""
  ) {
    console.log("passworsds do not match");
    names[4].style.border = "1px solid red";
    names[5].style.border = "1px solid red";
  } else {
    console.log("passworsds match");
  }
});
