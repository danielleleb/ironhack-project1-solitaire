'use strict';

function Game(mainElement, timer) {
    var self = this;
    
    self.mainElement = mainElement;
    self.timerCounter = timer;
    
    self.gameElement;
    self.cardStackElement;
    self.flippedCardElement;

    self.aceSpaceElement;
    self.cardsPilesElement;
    self.scoreElement;

    self.finished;
    self.score;
    self.width;
    self.height;
    self.movesCounter;

    // -- STATE
    self.selectedCard;
    self.state;

    // -- CARDS
    self.values;
    self.suits;

    self.deck;
    self.flippedCards;



    self._handleClick = function(e) {
        console.log(e.currentTarget);
    
        if (self.state) {
            self._computeState();
            var destinationElement = e.currentTarget;
            destinationElement.appendChild(self.selectedCard);
    
            self.selectedCard.classList.remove('on');   
        }
        // new
        // else if (e.currentTarget == self.flippedCardElement ) {
        //     self.selectedCard = self.flippedCards[0]
        //     self.selectedCard.classList.add('on')
        // }
        //new
        else if (e.currentTarget.children.length > 0){
            self.state = e.currentTarget.id;
            self._selectCardOn(e.currentTarget);
        }
    }  

    self._handleCardStackClick = function(e) {
        self._getNextCard();  
        self._drawFlippedCard();  
    }
  
    self.init();
}

Game.prototype._selectCardOn = function(element) {
    var self = this;
    
    self.selectedCard = self._getChildrenElementInPosition(element, 0);
    self.selectedCard.classList.add('on');
}

Game.prototype.init = function() {
    var self = this;

    self.movesCounter = 0;
    self.hasCard = false;
    self.score = 0;
    self.deck = [];
    self.flippedCards = [];

    self.finished = false;
    self.values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    self.suits = ['hearts', 'clubs', 'diamonds', 'spades'];
    self.width = window.innerWidth;
    self.height = window.innerHeight;


    self.buildLayout();
    self.createDeck();
    self.startGame();
}

Game.prototype._computeState = function() {
    var self = this;

    switch(self.state) {
        case 'flipped-card':

            self.flippedCards.shift();
            self._drawFlippedCard();

            break;
        default:
            console.log('something wrong with the id');
    }

    self.state = null;
}

//Pre:- The flipped it will be always at posision 0
Game.prototype._drawFlippedCard = function () {
    var self = this;
    var card = self.flippedCards[0];

    if (card) {
        var cardElement = card.createCardElement();
        self._removeChildOf(self.flippedCardElement);
        self.flippedCardElement.appendChild(cardElement);
    }
}

//TODO:- Change name and behaviour
Game.prototype._removeChildOf = function (element) {
    if (element.children.length > 0) {
        element.removeChild(element.firstChild);
    }
}

Game.prototype._getNextCard = function() {
    var self = this;
    self.flippedCards.unshift(self.deck.shift());
}

Game.prototype.startGame = function() {
    //show all the cards in the "Zone 3"
    var self = this;

}

Game.prototype._getChildrenElementInPosition = function(element, pos) {
    return element.children[pos];
}

Game.prototype.buildLayout = function () {
    var self = this;

    self.gameElement = document.createElement('div');
    self.gameElement.setAttribute('id', 'background');
    self.gameElement.style.height = self.height + 'px';
    self.gameElement.style.width = self.width + 'px';
    
    // TOP RIGHT CORNER ACES SPACE
    self.aceSpaceElement = document.createElement('div');
    self.aceSpaceElement.setAttribute('class', "ace-space");

    var aceStack1 = document.createElement('div');
    aceStack1.setAttribute('class', 'ace-stack');
    aceStack1.addEventListener('click', self._handleClick);
    self.aceSpaceElement.appendChild(aceStack1);

    var aceStack2 = document.createElement('div');
    aceStack2.setAttribute('class', 'ace-stack');
    aceStack2.addEventListener('click', self._handleClick);
    self.aceSpaceElement.appendChild(aceStack2);

    var aceStack3 = document.createElement('div');
    aceStack3.setAttribute('class', 'ace-stack');
    aceStack3.addEventListener('click', self._handleClick);
    self.aceSpaceElement.appendChild(aceStack3);

    var aceStack4 = document.createElement('div');
    aceStack4.setAttribute('class', 'ace-stack');
    aceStack4.addEventListener('click', self._handleClick);
    self.aceSpaceElement.appendChild(aceStack4);

    self.gameElement.appendChild(self.aceSpaceElement);

    // TOP LEFT CORNER FREE CARDS
    var freeCardsElement = document.createElement('div');
    freeCardsElement.setAttribute('class', 'free-cards');
    
    self.cardStackElement = document.createElement('div');
    self.cardStackElement.setAttribute('class','card-stack');
    freeCardsElement.appendChild(self.cardStackElement);
    self.cardStackElement.addEventListener('click', self._handleCardStackClick)

    self.flippedCardElement = document.createElement('div');
    self.flippedCardElement.setAttribute('class','flipped-card');
    self.flippedCardElement.setAttribute('id','flipped-card');
    self.flippedCardElement.addEventListener('click', self._handleClick);
    freeCardsElement.appendChild(self.flippedCardElement);
    
    self.gameElement.appendChild(freeCardsElement);

    // CARD PILES IN CENTER
    self.cardsPilesElement = document.createElement('div');
    self.cardsPilesElement.setAttribute('class', 'card-piles-container');


    for (var i = 0; i < 7; i++) {
        var cardPile = document.createElement('div');
        cardPile.setAttribute('class', 'card-pile');
        cardPile.addEventListener('click', self._handleClick);
        self.cardsPilesElement.appendChild(cardPile);
    }
    self.gameElement.appendChild(self.cardsPilesElement);

    // SCORE
    self.scoreElement = document.createElement('div');
    self.scoreElement.setAttribute('class', 'score-container');
    
    var moves = document.createElement('h3');
    moves.setAttribute('class', 'moves');
    moves.innerText = "moves: " + self.movesCounter;
    self.scoreElement.appendChild(moves);
    
    var timer = document.createElement('h3');
    timer.setAttribute('class', 'timer');
    timer.innerText = "time: " + self.timerCounter;
    self.scoreElement.appendChild(timer);
    
    self.gameElement.appendChild(self.scoreElement);

    // MAIN APPEND
    self.mainElement.appendChild(self.gameElement);
}

Game.prototype.createDeck = function (){
    var self = this;

    for (var i = 0; i < self.suits.length; i++) {
        var suit = self.suits[i];
        for (var j = 0; j < self.values.length; j++) {
            var value = self.values[j];
            var newCard = new Card(value, suit, self.gameElement);
            self.deck.push(newCard);
        }   
    }

    self.shuffleCards();
}

Game.prototype.shuffleCards = function (){
    var self = this;
    var temporaryValue; 
    var randomIndex;
    var currentIndex = self.deck.length - 1; 

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        temporaryValue = self.deck[currentIndex];
        self.deck[currentIndex] = self.deck [randomIndex];
        self.deck[randomIndex] = temporaryValue;

        currentIndex -= 1;
    }
}

Game.prototype.destroy = function(){
    var self = this;
    self.finished = true;
    self.gameElement.remove();
}
