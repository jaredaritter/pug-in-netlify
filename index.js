// const pug = require('pug');

// const compiledFunction = pug.compileFile('template.pug');

// const pageInfo = compiledFunction({
//   title: 'Big Title',
//   val: [1, 2, 3, 4],
//   names: ['Jared', 'Suzie', 'Penny'],
// });

// console.log(pageInfo);

console.log('working');

const body = document.querySelector('body');
const p = document.createElement('p');
p.textContent = 'Hello world';

body.appendChild(p);
