function loginSubmit(event) {
  event.preventDefault();
  console.log("Hii");

  const name = document.getElementById("exampleInputName").value.trim();
  const email = document.getElementById("exampleInputEmail1").value.trim();
  const password = document
    .getElementById("exampleInputPassword1")
    .value.trim();

  const errorName = document.getElementById("nameError");
  const errorEmail = document.getElementById("emailError");
  const errorPassword = document.getElementById("passwordError");

  // Name validation
  if (name === "") {
    errorName.innerText = "Name cannot be empty";
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorEmail.innerText = "Please enter a valid email address";

    return;
  }

  // Password validation

  if (password.length < 8) {
    errorPassword.innerText = "Password should be at least 8 characters long";

    return;
  }


  // Form submitted successfully
  alert("Form submitted successfully!");
}
