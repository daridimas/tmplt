// Declaring element
const username = document.getElementById("username")
const registerForm = document.getElementById("registerForm")
const logoutForm = document.getElementById("logoutForm")

onload = function () {
  console.log("tes onlode")
  const token = sessionStorage.getItem("token")
  console.log(token)
  if (token && token != null) {
    registerForm.style.display = "none"
  } else {
    registerForm.style.display = "blok"
    logoutForm.style.display = " none"
  }
}

function register() {
  console.log(username.value)
  sessionStorage.setItem("token", username.value)
  registerForm.style.display = "none"
  logoutForm.style.display = " block"
}

function logout() {
  sessionStorage.removeItem("token")
  location.reload()
}
