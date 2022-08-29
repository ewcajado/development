// meatToEachPerson = 0.4kg to each person : +6 hours 0.650kg
// beerToEachPerson = 1200ml to each person : +6 hours 2000ml
// drinkToEachPerson = 1000ml to each person : +6 hours 1500ml
// kids are always 0,5

let inputAdults = document.getElementById('adults');
let inputKids = document.getElementById('kids');
let inputHours = document.getElementById('hours');

let result = document.getElementById('result');

function calculate() {
    console.log("calculando...");

    let adults = inputAdults.value;
    let kids = inputKids.value;
    let hours = inputHours.value;

    let meatAmount = meatToEachPerson(hours) * adults + (meatToEachPerson(hours) / 2 * kids);
    let beerAmount = beerToEachPerson(hours) * adults;
    let drinkAmount = drinkToEachPerson(hours) * adults + (drinkToEachPerson(hours) / 2 * kids);

    result.innerHTML = `<p>${meatAmount /}`


}

function meatToEachPerson(hours){
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

function drinkToEachPerson(hours){
    if (hours >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}