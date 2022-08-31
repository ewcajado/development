const FRONT = "card_front";
const BACK = "card_back";

let teams = ['brazil','argentina','belgium','croatia','england','france','germany','netherlands','portugal','senegal'];

let cards = null;

startGame();

function startGame() {
     cards = createCardsFromTeams(teams);
     shuffleCards(cards);

     initializeCards(cards);
}

function initializeCards(cards) {
     let gameBoard = document.getElementById("gameBoard");

}
console.log(gameBoard)

function shuffleCards(cards){
     let currentIndex = cards.length;
     let randomIndex = 0;

     while(currentIndex !== 0){

          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]];

     }
}

function createCardsFromTeams(teams) {
 let cards = [];

 for(let team of teams){
  cards.push(createPairFromTeam(team));
 }

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