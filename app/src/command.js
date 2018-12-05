import { store } from './store';

export function drawCommand() {
    document.querySelector('.multiply input').value = store.multiplicationNbr;
    document.querySelector('.total input').value = store.total;
}