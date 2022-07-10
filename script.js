"use strict";

window.onload = function () {
    const content = document.getElementById("content");
    const tbody = document.createElement("tbody");
    const tbl = document.createElement("table");

    for (let i = 0; i < 16; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < 16; j++) {
            const td = document.createElement("td");
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.style.backgroundColor = "white";
            cell.style.width = "40px";
            cell.style.height = "40px";
            cell.style.border = "1px solid black";
            td.appendChild(cell);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    tbl.appendChild(tbody);
    content.appendChild(tbl);
};

document.addEventListener("mouseover", function (event) {
    const target = event.target;
    if (target.className === "cell") {
        target.style.backgroundColor = "#9f9f9f";
        target.style.transition = "0.1s ease-in";
    }
    setTimeout(function () {
        target.style.backgroundColor = "white";
        target.style.transition = "0.3s ease-out";
    } , 500);
});
