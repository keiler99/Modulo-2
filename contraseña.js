//Pide al usuario que ingrese una contraseña con prompt(). Si la contraseña es "secreto123", muestra "Acceso concedido". De lo contrario, muestra "Acceso denegado".

let cont = prompt("Ingrese la contraseña: ")

if (cont == "secreto123"){
    console.log("Acceso concedido")
}else{
    console.log("Acceso denegado")
}