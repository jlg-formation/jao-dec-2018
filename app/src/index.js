import { increase, decrease, setMultiplyNbr } from './action';
import { components, draw, action } from './flux';
import { drawSVG } from './svg';
import { drawCommand } from './command';

// import Hashes from 'jshashes';

// const SHA256 = new Hashes.SHA256;
// const str = 'Sample text!'
// console.log('SHA256: ' + SHA256.hex(str));

components.push(drawCommand, drawSVG);

function main() {
    draw();
    document.querySelector('button.increase').addEventListener('click', action(increase));
    document.querySelector('button.decrease').addEventListener('click', action(decrease));
    document.querySelector('.command input').addEventListener('input', action(setMultiplyNbr));
}

addEventListener('DOMContentLoaded', main);

