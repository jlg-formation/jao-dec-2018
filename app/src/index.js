console.log('coucouxxx');

import Hashes from 'jshashes';

const SHA256 =  new Hashes.SHA256;

var str = 'Sample text!'

console.log('SHA256: ' + SHA256.hex(str));

