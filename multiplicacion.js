//Pide un n�mero al usuario con prompt(). Usa un bucle for para mostrar la tabla de multiplicar de ese n�mero del 1 al 10.
let num = prompt("Ingresa un numero: ")
parseInt(num)

let mult = 1
while (mult < 11) {
    let res = num * mult;
    mult++;
    console.log(res)
}