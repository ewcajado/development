const FRONT = "card_front";
const BACK = "card_back";
const CARD = "card";
const ICON = "icon";

startGame();

function startGame() {
     initializeCards(game.createCardsFromTeams());
}

function initializeCards(cards) {
     let gameBoard = document.getElementById("gameBoard");

     game.cards.forEach(card => {
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
          iconElement.src = "./assets/images/" + card.icon + ".png";
          cardElementFace.appendChild(iconElement);
     } else {
          let iconElement = document.createElement("img");
          iconElement.classList.add(ICON);
          iconElement.src = "./assets/images/back.png";
          cardElementFace.appendChild(iconElement)

     }
     element.appendChild(cardElementFace);
}

function flipCard(){

     if (game.setCards(this.id)) {

          this.classList.add("flip");
          if(game.checkMatch()){
               game.clearCards();
          }else{

               let fir
          };
     
}
}