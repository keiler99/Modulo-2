//Pide un número al usuario con prompt(). Usa if-else if-else para determinar si el número es positivo, negativo o cero, y muestra el resultado.

let num = prompt("Ingresa el numero: ")

num = parseInt(num)

if (num < 0){
    console.log("Negativo")
}else if (num == 0){
    console.log("Cero")
}else {
    console.log("Positivo")
}