// carne - 400 gr por pessoa   + de 6 horas  - 650
// cerveja  -  1200 ml por pessoa +  6 horas - 2000ml
// refrigerante/agua/sumo - 1000 ml por pessoa + 6 horas 1500ml
// linguiça = 200gr por pessoa + 6 horas = 400gr
// pão de alho = 200gr por pessoa + de 6 horas = 400gr
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
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
    let qtdTotalLinguica = linguicaPP(duracao) * adultos + (linguicaPP(duracao) / 2 * criancas);
    let qtdAlho = alhoPP(duracao) * adultos + (alhoPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} kg of meat</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalLinguica / 1000)} kg of salsage</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdAlho / 100)} kg of garlic bread</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} beer cans</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} juice or soda botlles</p><br>lets go to the barbecue party!`

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

function linguicaPP(duracao){
    if (duracao >= 6) {
        return 400;
    } else {
        return 200;
    }

}

function alhoPP(duracao){
    if (duracao >= 6) {
        return 350;
    } else {
        return 200;
    }

}