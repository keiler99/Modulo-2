let altura = prompt("Ingresa tu altura: (ej: 1.70) ")
let peso = prompt("Ingresa tu peso: (ej: 70.0) ")

let alturan = parseFloat(altura)
let peson = parseFloat(peso)

let IMC = peson / (alturan * alturan)

  if (IMC < 18.5) {
    console.log("Bajo peso");
  } else if (IMC >= 18.5 && IMC < 24.9) {
    console.log("Peso normal");
  } else if (IMC >= 24.9 && IMC < 29.9) {
    console.log("Sobrepeso");
  } else {
    console.log("Obesidad");
  }
