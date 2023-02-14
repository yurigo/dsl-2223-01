const a = ['alice', 'bob', 'charlie'];
const b = ['dave', 'eva', 'frank'];

// //console.log(a, b);

const c = a.concat(b);

// const c = [a, b]; // concat con la nueva sintaxis

console.log(c);

// // const d = a[0];
// // const e = a[1];
// // const f = a[2];

// //destructuring an array:
// const [d, e, f, g] = a;
// const [, , j] = a;
// const [k, ...l] = a;

// console.log(d, e, f, g);
// console.log(j);
// console.log(k, l);

const resultadoFind = c.find((elemento) => {
  // console.log(elemento);
  return elemento.startsWith('e');
});

const resultadoFilter = c.filter((elemento) => {
  // console.log(elemento);

  return elemento.length == 3;
});

const resultadoMap = c.map((elemento) => {
  return '+' + elemento + '+';
});

const num = [1, 2, 6, 4, 5, 3];

console.log(num);

const resultadoSort = num.sort((a, b) => {
  return a - b;
});

console.log(num);
// console.log(c);
// console.log(resultadoFind);
// console.log(resultadoFilter);
// console.log(resultadoMap);
// console.log(resultadoSort);
// console.log(c);

console.log(resultadoSort);
