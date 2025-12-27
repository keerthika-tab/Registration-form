const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

function validateName() {
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name cannot be empty";
    return false;
  }
  nameError.textContent = "";
  return true;
}

function validateEmail() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Enter a valid email address";
    return false;
  }
  emailError.textContent = "";
  return true;
}

function validatePassword() {
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    return false;
  }
  passwordError.textContent = "";
  return true;
}

function validateForm() {
  const isValid =
    validateName() &&
    validateEmail() &&
    validatePassword();

  submitBtn.disabled = !isValid;
}

nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);

document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("🎉 Registration Successful!");
});
const darkToggle = document.getElementById("darkToggle");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkToggle.textContent = "☀️ Light Mode";
  } else {
    darkToggle.textContent = "🌙 Dark Mode";
  }
});