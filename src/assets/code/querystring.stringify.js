const { stringify } = require('@favware/querystring');
// or for TypeScript:
// import { stringify } from '@favware/querystring';

console.log(stringify({ prop: 'value', prop2: 'value2' }));
//=> '?prop=value&prop2=value2'

// supply options
console.log(stringify({ prop: 'value', prop2: 'value2' }, { separator: '&', equals: '=', includeQuestion: true }));
//=> '?prop=value&prop2=value2'

// customize options
console.log(stringify({ prop: 'value', prop2: 'value2' }, { separator: '&&', equals: '=', includeQuestion: false }));
//=> 'prop=value&&prop2=value2'
