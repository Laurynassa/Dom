// trecios:

const button = document.createElement("button");
button.innerText = "CREATE TABLE: ";
const inputRows = document.createElement("input");
inputRows.placeholder = "eilutes";
const inputColumns = document.createElement("input");
inputColumns.placeholder = "stulpeliai";
const container = document.createElement("div");
container.append(button, inputRows, inputColumns);
document.body.append(container);
const divas = document.getElementById("tablel");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const tablecheck = document.querySelector("table");
  if (tablecheck) {
    tablecheck.remove();
  }
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");
  const eilSk = inputRows.value; // eilSk talpina ivesta value i langelius
  const stulpSk = inputColumns.value; // stulpSk talpina ivesta value i langelius

  for (let i = 0; i < eilSk; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < stulpSk; j++) {
      const cell = document.createElement("td");
      const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  }
  table.appendChild(tableBody);
  document.body.appendChild(table);
  table.setAttribute("border", "2"); // del vizualo
});
