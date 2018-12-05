import { store } from './store';

export function increase() {
    console.log('increase');
    store.multiplicationNbr++;
}
