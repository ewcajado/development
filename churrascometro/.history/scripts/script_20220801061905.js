// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
    let qdtTotalCerveja = cervejaPP(duracao) * adultos
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas)

        
}

function carnePP(duracao){
    if( duracao >= 6) {
        return 650
    } else {
        return 400
    }
}

function cervejaPP(duracao)
    if (duracao >= 6) {
        return 2000
    } else {
        return 400