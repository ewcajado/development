let game = {
 
 techs: ['bootstrap', 
    'css',
    'electron',
    'firebase',
    'html',
    'javascript', 
    'jquery', 
    'mongo', 
    'node', 
    'react'],


 cards : null,

 createCardsFromTechs: function(techs) {
    
  let cards = [];

  for(let tech of techs){
       cards.push(createPairFromTech(tech));
   
  }
  return cards.flatMap(pair => pair);

}

 createPairFromTech: function(tech){

   return [{
       id: createIdWithTech(tech),
       icon:tech,
       flipped:false
   }, {
       id: createIdWithTech(tech),
       icon:tech,
       flipped:false
   }]
}

function createIdWithTech(tech){
   return tech + parseInt(Math.random() *1000);
}

}