console.log('coucou');

import Hashes from 'jshashes';

const SHA256 = new Hashes.SHA256;

var str = 'Sample text!'

console.log('SHA256: ' + SHA256.hex(str));


function draw() {
    const body = document.querySelector('body');
    console.log('body', body);
    body.innerHTML = `
<svg height="600" width="600">
    <circle cx="300" cy="300" r="270" stroke="black" stroke-width="3" fill="hsl(0, 100%, 50%, 0.1)" />
</svg>
    `;

    const svg = document.querySelector('svg');
    console.log('svg', svg);
    const circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    circle.setAttribute("cx", 300);
    circle.setAttribute("cy", 300);
    circle.setAttribute("r", 5);
    circle.setAttribute("stroke", "black");
    svg.appendChild(circle);
}

addEventListener('DOMContentLoaded', draw);
