import { store } from './store';

export function increase() {
    console.log('increase');
    store.multiplicationNbr++;
}

export function decrease(...args) {
    console.log('decrease', args);
    store.multiplicationNbr--;
}

export function setMultiplyNbr() {
    store.multiplicationNbr = document.querySelector('.command input').value;
}
