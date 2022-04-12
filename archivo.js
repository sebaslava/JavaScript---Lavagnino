//Ejercicio 1
//Pedir número mediante prompt, sumarle otro número en cada repetición, realizando una salida por cada resultado.
let numero = "";
let otroNumero = "";
numero = parseInt(prompt("Ingrese Número"));

do {
    otroNumero = parseInt(prompt("Ingrese Otro Número"));
    let resultado = (numero + otroNumero);
    alert(resultado);
} while (otroNumero != 0)