let game = {
     teams: ['brazil','argentina','belgium','croatia','england','france','germany','netherlands','portugal','senegal'],

     cards: null,

     createCardsFromTeams: function(teams) {

          this.cards = [];
         
          teams.forEach((team) => {
           cards.push(createPairFromTeam(team));
          })
         
          return cards.flatMap(pair => pair);
         },
         
         createPairFromTeam: function(team) {
          
          return [{
           id: createIdWithTeam(team),
           icon: team,
           flipped: false,
          }, {
           id: createIdWithTeam(team),
           icon: team,
           flipped: false,
          }]
         
         
         },
         
         createIdWithTeam: function(team) {
              return team + parseInt(Math.random() * 1000);
         }

}