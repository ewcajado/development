let game = {
     teams: ['brazil','argentina','belgium','croatia','england','france','germany','netherlands','portugal','senegal'],

     cards: null,

     createCardsFromTeams: function (teams) {
          let cards = [];
         
          teams.forEach((team) => {
           cards.push(createPairFromTeam(team));
          })
         
          return cards.flatMap(pair => pair);
         }
         
         function createPairFromTeam(team) {
          return [{
           id: createIdWithTeam(team),
           icon: team,
           flipped: false,
          }, {
           id: createIdWithTeam(team),
           icon: team,
           flipped: false,
          }]
         
         
         }
         
         function createIdWithTeam(team) {
              return team + parseInt(Math.random() * 1000);
         }

}