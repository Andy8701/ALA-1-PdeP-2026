let num1 = Number(prompt("Ingrese el primer número:"));
let operador = prompt("Ingrese la operación (+, -, * o /):");
let num2 = Number(prompt("Ingrese el segundo número:"));

if (operador == "+") {
    console.log(num1 + num2);
} else if (operador == "-") {
    console.log(num1 - num2);
} else if (operador == "*") {
    console.log(num1 * num2);
} else if (operador == "/") {
    console.log(num1 / num2);
} else {
    console.log("Operador incorrecto");
}

console.log(resultado);