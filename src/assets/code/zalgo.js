// const { zalgo, banish } = require('awesome-zalgo');
// Or for babel / typescript:
// import { zalgo, banish, ZalgoOptions } from 'awesome-zalgo';
// Zalgo is also available as default import. For example
// import zalgo, { banish, ZalgoOptions } from 'awesome-zalgo';

// Zalgo usage
zalgo('some text');


// => ŝ̜̩͇̼̥̼́̏͢o͎͊͜ḿ̛̩̳̖͕̞̩̭ͪe͖̺̣̹̺̋̀͛̽͝ ̖͍̭͓̯̠͑͑͢t̼̪̋͌͢eͯ̋͏͖͎͍̩̭̮x̢͚̄̾̀̈ͧ̓ͩ̚t̪ͫ͝


// Banish usage
banish('ŝ̜̩͇̼̥̼́̏͢o͎͊͜ḿ̛̩̳̖͕̞̩̭ͪe͖̺̣̹̺̋̀͛̽͝ ̖͍̭͓̯̠͑͑͢t̼̪̋͌͢eͯ̋͏͖͎͍̩̭̮x̢͚̄̾̀̈ͧ̓ͩ̚t̪ͫ͝');


// => some text

// To log all the supported chars use:
const { chars } = require('awesome-zalgo/dist/chars');
console.log(chars);

// Zalgo supports options:

const options = {
  up: true,
  middle: true,
  down: true,
  size: 'maxi', // or 'mini' or ''
};

zalgo('some text', options);
