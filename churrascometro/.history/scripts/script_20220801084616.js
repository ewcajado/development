// carne - 400 gr por pessoa   + de 6 horas  - 650
// cerveja  -  1200 ml por pessoa +  6 horas - 2000ml
// refrigerante/agua/sumo - 1000 ml por pessoa + 6 horas 1500ml

// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular() {
    console.log("Calculando...")

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value

    let qdtTotalCarne = 400 * adultos + (400/2 * criancas)
    console.log(qdtTotalCarne)
}

function CarnePP(duracao){
    let carne = 400
    if(duracao >= 6) {
        return 650
    }else{}

}