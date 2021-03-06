"use strict";

const content = document.getElementById("content");
const btn = document.createElement("button");

btn.innerText = "Create New Table";
btn.onclick = function () {
    alert("How many squares would you like in the table?");
    const input = prompt("Enter a number");
    const num = parseInt(input);
    if (num > 0 && num < 100) {
        createTable(num);
    } else if (num === 0) {
        alert("Mate, must be larger than 0.");
    } else if (num > 100) {
        alert("Please keep it under 100!");
    } else if (num === null) {
        alert("You must enter a number!");
    }
};
content.appendChild(btn);

const tbl = document.createElement("table");
const tbody = document.createElement("tbody");
tbl.style.width = "960px";
tbl.style.height = "960px";
var rowCount = tbl.rows.length;
function createTable(num) {
    while (tbody.hasChildNodes()) {
        tbody.removeChild(tbody.firstChild);
    }
    for (let i = 0; i < num; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < num; j++) {
            const td = document.createElement("td");
            var cell = document.createElement("div");
            cell.className = "cell";
            cell.style.backgroundColor = "white";
            cell.style.width = "100%";
            cell.style.height = "100%";
            cell.style.border = "1px solid black";

            td.appendChild(cell);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    tbl.appendChild(tbody);
    content.appendChild(tbl);
}

document.addEventListener("mouseover", function (event) {
    const target = event.target;
    if (target.className === "cell") {
        target.style.backgroundColor = "#9f9f9f";
        target.style.transition = "ease-in";
    }
    setTimeout(function () {
        target.style.backgroundColor = "white";
        target.style.transition = "0.3s ease-out";
    }, 500);
});