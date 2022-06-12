// Declaring element
const username = document.getElementById("username")
const registerForm = document.getElementById("registerForm")

onload = function () {
  console.log("test onload")
  const token = this.sessionStorage.getItem("token")
  console.log(token)
  if (token && token != null) {
    registerForm.style.display = "none"
  } else {
    registerForm.style.display = "block"
  }
}

function register() {
  console.log(username.value)
  sessionStorage.setItem("token", username.value)
}
