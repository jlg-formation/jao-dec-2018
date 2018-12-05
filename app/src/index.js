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
    addEventListener('contextmenu', e => e.preventDefault());
    document.querySelector('button.increase').addEventListener('click', action(increase));
    addEventListener('keypress', event => {
        console.log('event.key', event.key);
        switch (event.key) {
            case "+":
                action(increase)();
                break;
            case "-":
                action(decrease)();
                break;
            default:
                return; // Quitter lorsque cela ne gère pas l'événement touche.
        }
        event.preventDefault();
    });
    document.querySelector('button.decrease').addEventListener('click', action(decrease));
    document.querySelector('.command input').addEventListener('input', action(setMultiplyNbr));
}

addEventListener('DOMContentLoaded', main);

