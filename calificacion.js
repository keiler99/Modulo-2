//Pide una calificaci�n num�rica (0-10) con prompt(). Si la calificaci�n es 7 o m�s, muestra "Aprobado". Si es menor, muestra "Reprobado".
let cal = prompt("Ingresa tu calificacion (0-10): ")

if (cal < 7){
    console.log("Reprobado")
}else {
    console.log("Aprobado")
}