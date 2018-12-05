import { store } from './store';

export function drawCommand() {
    document.querySelector('.command input').value = store.multiplicationNbr;
}