//Pide al usuario que ingrese una contraseņa con prompt(). Si la contraseņa es "secreto123", muestra "Acceso concedido". De lo contrario, muestra "Acceso denegado".

let cont = prompt("Ingrese la contraseņa: ")

if (cont == "secreto123"){
    console.log("Acceso concedido")
}else{
    console.log("Acceso denegado")
}