function signup() {
  localStorage.setItem("user", signupUser.value);
  localStorage.setItem("pass", signupPass.value);
  alert("Signup Successful");
  window.location.href = "index.html";
}

function login() {
  if (
    loginUser.value === localStorage.getItem("user") &&
    loginPass.value === localStorage.getItem("pass")
  ) {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Login");
  }
}

function logout() {
  localStorage.removeItem("user");
}
