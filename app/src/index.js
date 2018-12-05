import { increase } from './action';
import { store } from './store';

// import Hashes from 'jshashes';

// const SHA256 = new Hashes.SHA256;
// const str = 'Sample text!'
// console.log('SHA256: ' + SHA256.hex(str));

function drawSVG() {
    const div = document.querySelector('div');
    div.innerHTML = `
<svg height="600" width="600">
    <circle cx="${store.cx}" cy="${store.cy}" r="${store.r}" stroke="black" stroke-width="3" fill="hsl(0, 100%, 50%, 0.1)" />
</svg>
    `;
    for (let i = 0; i < store.total; i++) {
        addGraduation((360 / store.total) * i);
    }

    for (let i = 0; i < store.total; i++) {
        addLine(i);
    }
}

function addLine(i) {
    const angle1 = (2 * Math.PI / store.total) * i;
    const angle2 = (2 * Math.PI / store.total) * i * store.multiplicationNbr;

    const svg = document.querySelector('svg');
    const line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    line.setAttribute("x1", store.cx + store.r * Math.cos(angle1));
    line.setAttribute("y1", store.cy + store.r * Math.sin(angle1));
    line.setAttribute("x2", store.cy + store.r * Math.cos(angle2));
    line.setAttribute("y2", store.cy + store.r * Math.sin(angle2));
    line.setAttribute("stroke", "black");
    line.setAttribute("stroke-width", "3");
    svg.appendChild(line);
}

function addGraduation(angle) {
    angle = angle * 2 * Math.PI / 360;
    const svg = document.querySelector('svg');
    const circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    circle.setAttribute("cx", store.cx + store.r * Math.cos(angle));
    circle.setAttribute("cy", store.cy + store.r * Math.sin(angle));
    circle.setAttribute("r", 5);
    circle.setAttribute("stroke", "black");
    svg.appendChild(circle);
}



function decrease(...args) {
    console.log('decrease', args);
    store.multiplicationNbr--;
}

function setMultiplyNbr() {
    store.multiplicationNbr = document.querySelector('.command input').value;
}

function drawCommand() {
    document.querySelector('.command input').value = store.multiplicationNbr;
}


function draw() {
    drawCommand();
    drawSVG();
}

function action(callback) {
    return function(...args) {
        callback(...args);
        draw();
    }
}



function main() {
    draw();
    document.querySelector('button.increase').addEventListener('click', action(increase));
    document.querySelector('button.decrease').addEventListener('click', action(decrease));
    document.querySelector('.command input').addEventListener('input', action(setMultiplyNbr));
}

addEventListener('DOMContentLoaded', main);

