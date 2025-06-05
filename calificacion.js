//Pide una calificación numérica (0-10) con prompt(). Si la calificación es 7 o más, muestra "Aprobado". Si es menor, muestra "Reprobado".
let cal = prompt("Ingresa tu calificacion (0-10): ")

if (cal < 7){
    console.log("Reprobado")
}else {
    console.log("Aprobado")
}