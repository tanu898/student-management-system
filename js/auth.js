// REGISTER
function register() {
  let name = document.getElementById("regName").value;
  let email = document.getElementById("regEmail").value;
  let password = document.getElementById("regPassword").value;

  localStorage.setItem(
    "user",
    JSON.stringify({ name: name, email: email, password: password })
  );

  alert("Registered Successfully");
  location.href = "index.html";
}

// LOGIN
function login() {
  let user = JSON.parse(localStorage.getItem("user"));
  let emailInput = document.getElementById("email").value;
  let passwordInput = document.getElementById("password").value;

  if (user && user.email === emailInput && user.password === passwordInput) {
    location.href = "dashboard.html";
  } else {
    alert("Invalid Login");
  }
}

// LOGOUT
function logout() {
  location.href = "index.html";
}

// SHOW NAME ON DASHBOARD
let user = JSON.parse(localStorage.getItem("user"));
if (user && document.getElementById("welcomeUser")) {
  document.getElementById("welcomeUser").innerText =
    "Welcome, " + user.name;
}
