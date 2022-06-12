// Declaring element
const username = document.getElementById("username")

onload = function () {}

function register() {
  console.log(username.value)
  sessionStorage.setItem("token", username.value)
}
