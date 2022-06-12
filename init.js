// Declaring element
const username = document.getElementById("username")
const registerForm = document.getElementById("registerForm")

onload = function () {
  console.log("test onload")
  const token = this.sessionStorage.getItem("token")
  console.log(token)
  registerForm.style.display = "none"
}

function register() {
  console.log(username.value)
  sessionStorage.setItem("token", username.value)
}
