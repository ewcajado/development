const FRONT = "card_front";
const BACK = "card_back";
const CARD = "card";

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

     cards.forEach(card => {
          let cardElement = document.createElement('div');
          cardElement.id = card.id;
          cardElement.classList.add(CARD);
          cardElement.dataset.icon = card.icon;

          createCardContent(card, cardElement);

          cardElement.addEventListener('click', flipCard);
          gameBoard.appendChild(cardElement);


     })

}

function createCardContent(card, cardElement) {

     createCardFace(FRONT, card, cardElement)
     createCardFace(BACK, card, cardElement)

}

function createCardFace (face, card, element) {
     let cardElementFace = document.createElement('div');
     cardElementFace.classList.add(face)
     if (face === FRONT){
          
     } else {
          cardElementFace
     }
}

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

function flipCard(){

}