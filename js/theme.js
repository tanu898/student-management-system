// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

function setDark() {
  document.body.classList.add("dark");
  localStorage.setItem("theme", "dark");
}

function setLight() {
  document.body.classList.remove("dark");
  localStorage.setItem("theme", "light");
}
