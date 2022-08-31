const FRONT = "card_front"
const BACK = "card_back"

let teams = ['brazil','argentina','belgium','croatia','england','france','germany','netherlands','portugal','senegal']

function createCardsFromTeams(teams) {
 let cards = []

 for(let team of teams){
  cards.push(createPairFromTeam(team))
 }
}