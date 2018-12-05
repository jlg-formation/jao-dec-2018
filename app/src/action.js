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
    store.multiplicationNbr = document.querySelector('.command .multiply input').value;
}

export function increaseTotal() {
    console.log('increaseTotal');
    store.total++;
}

export function decreaseTotal(...args) {
    console.log('decreaseTotal', args);
    store.total--;
}

export function setTotal() {
    store.total = document.querySelector('.command .total input').value;
}
