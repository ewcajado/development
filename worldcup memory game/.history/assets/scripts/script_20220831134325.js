const FRONT = "card_front"
const BACK = "card_back"

let teams = ['brazil','argentina','belgium','croatia','england','france','germany','netherlands','portugal','senegal']

createCardsFromTeams(teams)
function createCardsFromTeams(teams) {
 let cards = []

 for(let team of teams){
  cards.push(createPairFromTeam(team))
 }

 console.log(cards.map)
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
     return team + parseInt(Math.random() * 1000)
}