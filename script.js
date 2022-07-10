'use strict'

document.onload = function () {
    setTimeout(function () {
        const content = document.querySelector('body'),
        table = document.createElement('table');
        table.style.border = '1px solid black';
        table.style.width = '50px';
        table.style.height = '50px';
        for (let i = 0; i < 16; i++) {

        }
        content.appendChild(table);
    } , 1000);
}