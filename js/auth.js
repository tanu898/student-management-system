function register() {
  localStorage.setItem(
    "user",
    JSON.stringify({
      email: regEmail.value,
      password: regPassword.value
    })
  );
  alert("Registered Successfully");
  location.href = "index.html";
}

function login() {
  let user = JSON.parse(localStorage.getItem("user"));

  if (
    user &&
    user.email === email.value &&
    user.password === password.value
  ) {
    location.href = "dashboard.html";
  } else {
    alert("Invalid Login");
  }
}

function logout() {
  location.href = "index.html";
}
