let game = {
     teams: ['brazil','argentina','belgium','croatia','england','france','germany','netherlands','portugal','senegal'],

     cards: null,

     createCardsFromTeams: function() {

          this.cards = [];
         
          this.teams.forEach((team) => {
           this.cards.push(this.createPairFromTeam(team));
          })
         
          this.card = this.cards.flatMap(pair => pair);
          this.shuffleCards();
         },
         
         createPairFromTeam: function(team) {
          
          return [{
           id: this.createIdWithTeam(team),
           icon: team,
           flipped: false,
          }, {
           id: this.createIdWithTeam(team),
           icon: team,
           flipped: false,
          }]
         
         
         },
         
         createIdWithTeam: function (team) {
              return team + parseInt(Math.random() * 1000);
         },

          shuffleCards: function (cards) {
          let currentIndex = this.cards.length;
          let randomIndex = 0;
     
          while(currentIndex !== 0){
     
               randomIndex = Math.floor(Math.random() * currentIndex);
               currentIndex--;
     
               [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]];
     
          }
     }

}