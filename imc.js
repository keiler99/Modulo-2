let altura = prompt("Ingresa tu altura: ")
let peso = prompt("Ingresa tu peso: ")

let alturan = parseInt(altura)
let peson = parseInt(peso)

let IMC = peson / (alturan * alturan)


switch(IMC){
    case 1:
        IMC < 18.5;
        res = "Bajo peso";
        break;
    case 2:
        18.5 <= IMC && IMC < 24.9;
        res = "Peso normal";
        break;
    case 3:
        24.9 <= IMC && IMC < 29.9;
        res = "Sobrepeso";
        break;
    default:
        IMC >= 30
        res = "Obesidad";
}


let res;

console.log(IMC)