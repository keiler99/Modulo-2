//Usando una variable de edad (puedes pedirla con prompt()), verifica si el usuario es mayor o igual a 18 años. Muestra un mensaje indicando si puede conducir o no.

let edad = prompt("Ingresa tu edad: ")

edad = parseInt(edad)

if (edad >= 18){
    console.log("Puede conducir")
    }else{
        console.log("No puede conducir")
    }