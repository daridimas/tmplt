// Declaring element
const username = document.getElementById("username")

onload = function () {
  console.log("test onload")
  const token = this.sessionStorage.getItem("token")
  console.log(token)
}

function register() {
  console.log(username.value)
  sessionStorage.setItem("token", username.value)
}
