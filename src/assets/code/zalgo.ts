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

// ZalgoOptions is an interface for TypeScript that has all the options you can supply to the Zalgo function. For example:

const options: ZalgoOptions = {
  up: true,
  middle: true,
  down: true,
  size: 'maxi',
};

zalgo('some text', options);

// Based on:

interface ZalgoOptions {
  up?: boolean;
  middle?: boolean;
  down?: boolean;
  size?: 'mini' | 'maxi' | '';
}
