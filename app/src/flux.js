export function draw() {
    components.forEach(n => n());
}

export const components = [];

export function action(callback) {
    return function (...args) {
        callback(...args);
        draw();
    }
}