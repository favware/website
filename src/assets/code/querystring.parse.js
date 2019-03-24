const { parse } = require('awesome-querystring');
// or for TypeScript:
// import { parse } from 'awesome-querystring';

console.log(parse('?prop=value&prop2=value2'));
//=> {prop: 'value', prop2: 'value2'}

// supply options
console.log(parse('?prop=value&prop2=value2', {separator: '&', equals: '='}));
//=> {prop: 'value', prop2: 'value2'}

// customize options
console.log(parse('prop=value&&prop2=value2', {separator: '&&', equals: '='}));
//=> {prop: 'value', prop2: 'value2'}