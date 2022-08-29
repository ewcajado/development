// meatToEachPerson = 0.4kg to each person : +6 hours 0.650kg
// beerToEachPerson = 1200ml to each person : +6 hours 2000ml
// refrigerante/agua/sumo - 1000 ml por pessoa + 6 horas 1500ml
// linguiça = 200gr por pessoa + 6 horas = 400gr
// pão de alho = 200gr por pessoa + de 6 horas = 400gr
// crianças valem por 0,5

let inputAdults = document.getElementById('adults');
let inputKids = document.getElementById('kids');
let inputHours = document.getElementById('hours');

let result = document.getElementById('result');

function calculate() {
    console.log("calculando...");

    let adults = inputAdults.value;
    let kids = inputKids.value;
    let hours = inputHours.value;
}

function meatToEachPeople(hours){
    if (hours >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function beerToEachPerson(hours){
    if (hours >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

function 