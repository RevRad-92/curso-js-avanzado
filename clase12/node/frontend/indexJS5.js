"use strict";

// BABEL (transpilador)
// transforma JS moderno a version compatible con navegador
// https://babeljs.io/

// 0) npm init -y
// 1) npm i babel-cli babel-preset-env
// 2) .babelrc // crear archivo en el root
// 3) node_modules/.bin/babel indexES6.js -o indexJS5.js
// 4) node_modules/.bin/babel indexES6.js -o indexJS5.js -w 

var num1 = 15;
var num2 = 11;

var sumar = function sumar(a, b) {
  return a + b;
};
var multiplicar = function multiplicar(a, b) {
  return a * b;
};

console.log("La suma " + num1 + " con " + num2 + " es " + sumar(num1, num2));
console.log("La suma " + num1 + " con " + num2 + " es " + multiplicar(num1, num2));
