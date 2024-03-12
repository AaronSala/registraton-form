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
    error.style.display = "none";
  });

  if (
    names[4].value !== names[5].value ||
    names[4].value == "" ||
    names[5].value == ""
  ) {
    console.log("passworsds do not match");
    names[4].style.border = "1px solid red";
    names[5].style.border = "1px solid red";
    document.querySelector(".passerror").style.display = "block";
  } else {
    document.querySelector(".passerror").style.display = "none";
    console.log(" passworsds match");
  }
 
  
 members();
});
function members() {
 const named = document.querySelectorAll(".form-control");
  const container = document.querySelector(".members")
  
  const member = document.createElement("div")
  member.classList.add("eachMember")

  const membered = `
  <ul member1>
  <li> <h3>${named[0].value} ${named[1].value}</h3></li>
   
    <li>Email: <span>${named[2].value}</span></li>
     <li>Phone: <span>${named[3].value}</span></li>
  </ul>
  `;
  container.appendChild(member)
  member.insertAdjacentHTML("beforeend", membered);
  
}


