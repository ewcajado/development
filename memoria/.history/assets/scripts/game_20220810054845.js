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
    
  this.cards = [];

  for(let tech of techs){
       this.cards.push(createPairFromTech(tech));
   
  }
  return this.cards.flatMap(pair => pair);

},

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
},

 createIdWithTech: function(tech){
   return tech + parseInt(Math.random() *1000);
}

}