import { store } from './store';

export function drawSVG() {
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
    line.setAttribute("x1", String(store.cx + store.r * Math.cos(angle1)));
    line.setAttribute("y1", String(store.cy + store.r * Math.sin(angle1)));
    line.setAttribute("x2", String(store.cy + store.r * Math.cos(angle2)));
    line.setAttribute("y2", String(store.cy + store.r * Math.sin(angle2)));
    line.setAttribute("stroke", "black");
    line.setAttribute("stroke-width", "3");
    svg.appendChild(line);
}

function addGraduation(angle) {
    angle = angle * 2 * Math.PI / 360;
    const svg = document.querySelector('svg');
    const circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    circle.setAttribute("cx", String(store.cx + store.r * Math.cos(angle)));
    circle.setAttribute("cy", String(store.cy + store.r * Math.sin(angle)));
    circle.setAttribute("r", '5');
    circle.setAttribute("stroke", "black");
    svg.appendChild(circle);
}
