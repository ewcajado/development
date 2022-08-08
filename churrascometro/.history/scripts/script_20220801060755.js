// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")


let resultado = document.getElementById("resultado")

function calcular() {
    console.log("calculando...")

    let adultos = inputAdultos.Value
    let criancas = inputcriancas.value

    let qdtTotalCarne = 400 * adultos + (400/ 2 * criancas)
    console.log(qdtTotalCarne)
}

function carnePP(duracao){
    let carne = 400
    if( duracao >= 6)
}
