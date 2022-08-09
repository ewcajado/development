const FRONT = "card_front";
const BACK = "card_back";

let techs = ['bootstrap', 
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react'];

function createCardsFromTechs(techs){
    
   let cards = [];

   for (let tech of techs){
        cards.push(createPairFromTech(tech));
    
    }
}

function createPairFromTech(tech){
    return
}