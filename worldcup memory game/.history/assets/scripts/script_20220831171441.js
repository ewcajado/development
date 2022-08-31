const FRONT = "card_front";
const BACK = "card_back";
const CARD = "card";
const ICON = "icon";
const ICON2 = "icon2";

let teams = ['brazil','argentina','belgium','croatia','england','france','germany','netherlands','portugal','senegal'];

let back = ['back', 'back', 'back', 'back', 'back', 'back]
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
     cardElementFace.classList.add(face);
     if (face === FRONT){
          let iconElement = document.createElement('img');
          iconElement.classList.add(ICON);
          iconElement.src = "./assets/images" + card.icon + ".png";
          cardElementFace.appendChild(iconElement);
     } else {
          /*cardElementFace.innerHTML = "&lt/&gt";*/
          let iconElementBack = document.createElement('img')
          iconElementBack.classList.add(ICON2);
          iconElementBack.src = "./assets/images" + card.icon2 + ".png";
          cardElementFace.appendChild(iconElementBack);
          /*let iconElementBack = document.createElement('img');
          iconElementBack.classList.add(ICON2);
          iconElementBack.src = "./assets/images" + card.icon + ".png";
          cardElementFace.appendChild(iconElement);*/
     }
     element.appendChild(cardElementFace);
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