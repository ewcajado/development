let game = {

     lockMode: false,
     firstCard: null,
     secondCard: null,
     
     setCards: function (id) {
          
          let card = this.cards.filter(card => card.id===id) [0];

          if
     }

     teams: ['brazil','argentina','belgium','croatia','england','france','germany','netherlands','portugal','senegal'],

     cards: null,

     createCardsFromTeams: function() {

          this.cards = [];
         
          this.teams.forEach((team) => {
           this.cards.push(this.createPairFromTeam(team));
          })
         
          this.cards = this.cards.flatMap(pair => pair);
          this.shuffleCards();
          return this.cards;
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
     
               [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]];
     
          }
     }

}