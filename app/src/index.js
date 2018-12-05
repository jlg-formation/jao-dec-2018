console.log('coucou');

import Hashes from 'jshashes';

const SHA256 = new Hashes.SHA256;

var str = 'Sample text!'

console.log('SHA256: ' + SHA256.hex(str));


function draw() {
    const body = document.querySelector('body');
    console.log('body', body);
}

addEventListener('DOMContentLoaded', draw);

/* <svg height="600" width="600">
        <circle cx="300" cy="300" r="270" stroke="black" stroke-width="3" fill="hsl(0, 100%, 50%, 0.1)" />
        <circle cx="300" cy="300" r="5" stroke="black" stroke-width="3" />
    </svg> */