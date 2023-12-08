function registerSubmit(event) {
  event.preventDefault();
  console.log("Hii");

  const name = document.getElementById("exampleInputFullName").value.trim();
  const email = document.getElementById("exampleInputEmail1").value.trim();
  const password = document.getElementById("exampleInputPassword").value;
  const confirmPassword = document.getElementById(
    "exampleConfirmPassword"
  ).value;
  const errorName = document.getElementById("nameError");
  const errorEmail = document.getElementById("emailError");
  const errorPassword = document.getElementById("passwordError");
  const errorConfirm = document.getElementById("confirmError");

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
  const passwordError = document.getElementById("passwordError");
  const passwordStrength = checkPasswordStrength(password);
  if (passwordStrength === "weak") {
    errorPassword.innerText =
      "Password should be at least 8 characters long, contain at least 1 uppercase letter, 1 lowercase letter, and 1 special character";

    return;
  }

  // Confirm Password validation
  if (password !== confirmPassword) {
    errorConfirm.innerText = "Passwords do not match";
    return;
  }

  // Form submitted successfully
  alert("Form submitted successfully!");
}

function checkPasswordStrength(password) {
  const strongRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;
  const fairRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,}$/;

  if (strongRegex.test(password)) {
    document.getElementById("password-strength").innerText = "Strong";
    document.getElementById("password-strength").style.color = "green";
    return "strong";
  } else if (fairRegex.test(password)) {
    document.getElementById("password-strength").innerText = "Fair";
    document.getElementById("password-strength").style.color = "yellow";
    return "fair";
  } else {
    document.getElementById("password-strength").innerText = "Weak";
    document.getElementById("password-strength").style.color = "red";
    return "weak";
  }
}
