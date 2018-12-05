// import Hashes from 'jshashes';

// const SHA256 = new Hashes.SHA256;
// const str = 'Sample text!'
// console.log('SHA256: ' + SHA256.hex(str));


const cx = 300;
const cy = 300;
const r = 270;
const total = 100;
let multiplicationNbr = 6;

function draw() {
    const div = document.querySelector('div');
    div.innerHTML = `
<svg height="600" width="600">
    <circle cx="${cx}" cy="${cy}" r="${r}" stroke="black" stroke-width="3" fill="hsl(0, 100%, 50%, 0.1)" />
</svg>
    `;
    for (let i = 0; i < total; i++) {
        addGraduation((360 / total) * i);
    }

    for (let i = 0; i < total; i++) {
        addLine(i);
    }

}

function addLine(i) {
    const angle1 = (2 * Math.PI / total) * i;
    const angle2 = (2 * Math.PI / total) * i * multiplicationNbr;

    const svg = document.querySelector('svg');
    const line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    line.setAttribute("x1", cx + r * Math.cos(angle1));
    line.setAttribute("y1", cy + r * Math.sin(angle1));
    line.setAttribute("x2", cy + r * Math.cos(angle2));
    line.setAttribute("y2", cy + r * Math.sin(angle2));
    line.setAttribute("stroke", "black");
    line.setAttribute("stroke-width", "3");
    svg.appendChild(line);
}

function addGraduation(angle) {
    angle = angle * 2 * Math.PI / 360;
    const svg = document.querySelector('svg');
    const circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    circle.setAttribute("cx", cx + r * Math.cos(angle));
    circle.setAttribute("cy", cy + r * Math.sin(angle));
    circle.setAttribute("r", 5);
    circle.setAttribute("stroke", "black");
    svg.appendChild(circle);
}

function increase() {
    console.log('increase');
    multiplicationNbr++;
    document.querySelector('.command span').innerHTML = multiplicationNbr;
}

function decrease() {
    console.log('decrease');
    multiplicationNbr--;
    document.querySelector('.command span').innerHTML = multiplicationNbr;
}

function main() {
    draw();
    document.querySelector('button.increase').addEventListener('click', increase);
    document.querySelector('button.decrease').addEventListener('click', decrease);
}

addEventListener('DOMContentLoaded', main);

