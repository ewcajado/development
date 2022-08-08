// carne - 400 gr por pessoa   + de 6 horas  - 650
// cerveja  -  1200 ml por pessoa +  6 horas - 2000ml
// refrigerante/agua/sumo - 1000 ml por pessoa + 6 horas 1500ml

// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    console.log(qtdTotalCarne);
    console.log(qtdTotalCarne);
    console.log(qtdTotalCarne);

}

function carnePP(duracao){
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao){
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao){
    if (duracao >= 6) {
        return 1500 ;
    } else {
        return 1000;
    }
}
