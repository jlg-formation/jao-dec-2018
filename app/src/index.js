console.log('coucou');

import Hashes from 'jshashes';

const SHA256 = new Hashes.SHA256;

const str = 'Sample text!'

console.log('SHA256: ' + SHA256.hex(str));


const cx = 300;
const cy = 300;
const r = 270;


function draw() {
    const body = document.querySelector('body');
    console.log('body', body);
    body.innerHTML = `
<svg height="600" width="600">
    <circle cx="300" cy="300" r="270" stroke="black" stroke-width="3" fill="hsl(0, 100%, 50%, 0.1)" />
</svg>
    `;


    const total = 10;
    for (let i = 0; i < total; i++) {
        addGraduation((360 / total) * i);
    }

}

function addGraduation(angle) {
    angle = angle * 2 * Math.PI / 360;
    const svg = document.querySelector('svg');
    console.log('svg', svg);
    const circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    circle.setAttribute("cx", cx + r * Math.cos(angle));
    circle.setAttribute("cy", cy + r * Math.sin(angle));
    circle.setAttribute("r", 5);
    circle.setAttribute("stroke", "black");
    svg.appendChild(circle);
}

addEventListener('DOMContentLoaded', draw);
