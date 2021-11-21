const form = document.querySelector(".signup-form");
const firstName = form.querySelector(".firstName");
const secondName = form.querySelector(".secondName");
const country = form.querySelector(".country");
const phone = form.querySelector(".phone");
const password = form.querySelector(".password");
const confirmPassword = form.querySelector(".confirmPassword");
const email = form.querySelector(".email");

const fields = form.querySelectorAll(".signup-input");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var errors = form.querySelectorAll(".error");

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove();
  }

  if (firstName.length < 2) {
    console.log("The name must be more than 2 characters");
    var error = document.createElement("span");
    error.className = "error";
    error.style.color = "red";
    error.innerHTML = "The name must be more than 2 characters";
    form[i].parentElement.insertBefore(error, firstName.nextSibling);
  }
  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log("field is blank", fields[i]);
      var error = document.createElement("span");
      error.className = "error";
      error.style.color = "red";
      error.innerHTML = "Cannot be blank";
      form[i].parentElement.insertBefore(error, fields[i].nextSibling);
    }
  }
  if (password.value !== confirmPassword.value) {
    console.log("not equals");
    var error = document.createElement("div");
    error.className = "error";
    error.style.color = "red";
    error.innerHTML = "Passwords does not match";
    password.parentElement.insertBefore(error, password.nextSibling);
  }
});
