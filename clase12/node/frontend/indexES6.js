// BABEL (transpilador)
// transforma JS moderno a version compatible con navegador
// https://babeljs.io/

// 0) npm init -y
// 1) npm i babel-cli babel-preset-env
// 2) .babelrc // crear archivo en el root
/*
{
    "presets": ["env"]
  }
*/
// 3) node_modules/.bin/babel indexES6.js -o indexJS5.js
// 4) node_modules/.bin/babel indexES6.js -o indexJS5.js -w 

let num1 = 15;
let num2 = 11;

const sumar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

console.log(`La suma ${num1} con ${num2} es ${sumar(num1, num2)}`);
console.log(`La suma ${num1} con ${num2} es ${multiplicar(num1, num2)}`);
