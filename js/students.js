let students = JSON.parse(localStorage.getItem("students")) || [];

/* ADD STUDENT */
function addStudent() {
  let h = +hindi.value;
  let e = +english.value;
  let m = +maths.value;
  let s = +science.value;

  let percent = (h + e + m + s) / 4;

  let grade =
    percent >= 90 ? "A" :
    percent >= 75 ? "B" :
    percent >= 50 ? "C" : "Fail";

  students.push({
    roll: roll.value,
    name: name.value,
    email: email.value,
    hindi: h,
    english: e,
    maths: m,
    science: s,
    percent: percent.toFixed(2),
    grade
  });

  localStorage.setItem("students", JSON.stringify(students));
  window.location.href = "view-students.html";
}

/* DISPLAY STUDENTS */
function displayStudents(list = students) {
  let tbody = document.getElementById("tableBody");
  if (!tbody) return;

  tbody.innerHTML = "";
  list.forEach(s => {
    tbody.innerHTML += `
      <tr>
        <td>${s.roll}</td>
        <td>${s.name}</td>
        <td>${s.email}</td>
        <td>${s.hindi}</td>
        <td>${s.english}</td>
        <td>${s.maths}</td>
        <td>${s.science}</td>
        <td>${s.percent}</td>
        <td>${s.grade}</td>
      </tr>
    `;
  });
}

/* SEARCH */
function searchStudent() {
  let value = search.value.toLowerCase();
  let filtered = students.filter(s =>
    s.name.toLowerCase().includes(value) ||
    s.roll.includes(value)
  );
  displayStudents(filtered);
}


/* AUTO LOAD */
displayStudents();
