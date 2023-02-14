// //ES6

// // const, let - var

// // tipos de variables (primitivos):
// const boolean = true;
// const booleanF = false;
// const miConstanteEntera = 2;
// const miConstanteFloat = 3.6;
// // var miVariable = "string";
// let miOtraVariable = 'otro string';
// let und = 'algo';
// und = undefined;
// und = null;
// console.log(und);

// // miConstanteEntera = 3;  <-- esto da error!

// let variable = 'string';
// variable = 5;
// variable = 'string';
// variable = `string`;

// function main() {
//   return 'hi';
// }

// const suma = function (a, b) {
//   return a + b;
// };

// const resta = (a, b) => {
//   const num1 = a;
//   const num2 = b;
//   return num1 - num2;
// };

// const multiplicacion = (a, b) => {
//   return a * b;
// };

// console.log(main());
// console.log(suma(3, 6));
// console.log(resta(7, 1));

// // -------------------

// // array
// const arr = [1, 2, 3, 4, 5, 6];
// const arr2 = [1, 'string', 3, [3, 4], 5, 6];

// console.log(arr[0], arr[4]);
// console.log(arr2[1], arr2[3][0]);

// // object
// const obj = {
//   id: 1,
//   nombre: 'test',
//   'id-3': 'hola',
//   'key-como-string': 400,
// };

// console.log(obj.id);
// console.log(obj['id']);

// const user = {
//   id: 1,
//   nombre: 'Yuri',
//   apellido: 'Gonzalez',
//   notas: {
//     mates: 10,
//   },
//   notasNum: [10, 3, 11],
// };

// console.log(user?.notas?.mates);

// const prueba = 'Hello world';

// console.log(prueba.charAt(100));

// main();

// callback:
const log = (a, callback) => {
  console.log(callback(a));
};

function hello(a) {
  return 'hello: ' + a;
}

function goodbye(a) {
  return 'goodbye: ' + a;
}

// const variable = hello('test');
// const variable2 = goodbye('test');

// console.log(variable);
// console.log(variable2);
function function1() {
  console.log('Son las ' + Date());
}

function function2() {
  console.log('Ejecuto la función 2');
}

function main() {
  //log('first log in main', hello);
  //log('second log in main', goodbye);

  setTimeout(function1, 5000);
  setTimeout(function2, 3000);

  setTimeout(() => {
    console.log('hi');
  }, 3000);

  setTimeout(function () {
    console.log('hi at 5000');
  }, 5000);

  function1();
}

main();
