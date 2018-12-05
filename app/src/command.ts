import { store } from './store';

export function drawCommand() {
    const input: HTMLInputElement = document.querySelector('.multiply input');
    input.value = store.multiplicationNbr + '';
    (document.querySelector('.total input') as HTMLInputElement).value = store.total + '';
}