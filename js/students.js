/* ================================
   STUDENT MANAGEMENT SYSTEM
   WITH 4 SUBJECTS (No Delete)
================================ */

let students = JSON.parse(localStorage.getItem("students")) || [];

/* ================================
   ADD STUDENT
================================ */
function addStudent() {
  const roll = document.getElementById("roll")?.value.trim();
  const name = document.getElementById("name")?.value.trim();

  const hindi = Number(document.getElementById("hindi")?.value);
  const english = Number(document.getElementById("english")?.value);
  const maths = Number(document.getElementById("maths")?.value);
  const science = Number(document.getElementById("science")?.value);

  if (!roll || !name || hindi === 0 || english === 0 || maths === 0 || science === 0) {
    alert("Please fill all fields");
    return;
  }

  const total = hindi + english + maths + science;
  const percentage = (total / 400) * 100;

  let grade = "Fail";
  if (percentage >= 90) grade = "A";
  else if (percentage >= 75) grade = "B";
  else if (percentage >= 50) grade = "C";

  const student = {
    roll,
    name,
    subjects: {
      Hindi: hindi,
      English: english,
      Maths: maths,
      Science: science
    },
    total,
    percentage: percentage.toFixed(2),
    grade
  };

  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));

  loadStudents();

  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("hindi").value = "";
  document.getElementById("english").value = "";
  document.getElementById("maths").value = "";
  document.getElementById("science").value = "";
}

/* ================================
   LOAD / SHOW STUDENTS
   (No Delete)
================================ */
function loadStudents() {
  const tbody = document.getElementById("tableBody");
  if (!tbody) return;

  tbody.innerHTML = "";

  students.forEach((stu) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${stu.roll}</td>
      <td>${stu.name}</td>
      <td>
        Hindi: ${stu.subjects.Hindi}<br>
        English: ${stu.subjects.English}<br>
        Maths: ${stu.subjects.Maths}<br>
        Science: ${stu.subjects.Science}
      </td>
      <td>${stu.total}</td>
      <td>${stu.percentage}%</td>
      <td>${stu.grade}</td>
    `;

    tbody.appendChild(row);
  });
}

/* ================================
   AUTO LOAD WHEN PAGE OPENS
================================ */
document.addEventListener("DOMContentLoaded", loadStudents);
