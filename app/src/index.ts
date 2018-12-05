import { increase, decrease, setMultiplyNbr } from './action';
import { increaseTotal, decreaseTotal, setTotal } from './action';
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
    document.querySelector('.multiply button.increase').addEventListener('click', action(increase));
    document.querySelector('.multiply button.decrease').addEventListener('click', action(decrease));
    document.querySelector('.multiply input').addEventListener('input', action(setMultiplyNbr));

    document.querySelector('.total button.increase').addEventListener('click', action(increaseTotal));
    document.querySelector('.total button.decrease').addEventListener('click', action(decreaseTotal));
    document.querySelector('.total input').addEventListener('input', action(setTotal));

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
    
}

addEventListener('DOMContentLoaded', main);

