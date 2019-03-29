const { crypto } = require('awesome-crypto'); // import { crypto } from 'awesome-crypto';

// Takes a bit length and base parameter
// base examples are base64 or base32
crypto(160, 64);
// => WVfWhr22w3PMCId4lY0bK68s5W/

// You can also import the predefined Radix's so you can be sure you're using a supported radix
const { Radix } = require('awesome-crypto'); // import { Radix } from 'awesome-crypto'
crypto(160, Radix.base64);
// => xuvsJPJsENB6UzieWORGlMlT3jk