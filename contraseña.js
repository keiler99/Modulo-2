//Pide al usuario que ingrese una contrase�a con prompt(). Si la contrase�a es "secreto123", muestra "Acceso concedido". De lo contrario, muestra "Acceso denegado".

let cont = prompt("Ingrese la contrase�a: ")

if (cont == "secreto123"){
    console.log("Acceso concedido")
}else{
    console.log("Acceso denegado")
}