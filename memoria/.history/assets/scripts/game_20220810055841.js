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

 createCardsFromTechs: function() {
    
  this.cards = [];

  for(let tech of this.techs){
       this.cards.push(this.createPairFromTech(tech));
   
  }
  this.cards = this.cards.flatMap(pair => pair);

},

 createPairFromTech: function(tech){

   return [{
       id: this.createIdWithTech(tech),
       icon:tech,
       flipped:false
   }, {
       id: this.createIdWithTech(tech),
       icon:tech,
       flipped:false
   }]
},

 createIdWithTech: function(tech){
   return tech + parseInt(Math.random() *1000);
},

 shuffleCards: function(cards){
   let currentIndex = cards.length;
   let randomIndex = 0;

   while(currentIndex !== 0){

     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex--;

     [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]
 }

}

}