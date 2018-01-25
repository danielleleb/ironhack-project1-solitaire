

'use strict';

function Game(mainElement, timer) {
    var self = this;
    
    self.mainElement = mainElement;
    self.timerCounter = timer;
    
    self.finished;
    self.score;
    self.width;
    self.height;
    self.movesCounter;
    
    self.origin;
    
    // -- ELEMENTS
    self.gameElement;
    self.cardStackElement;
    self.flippedCardElement;
    self.aceCardElement;
    self.pileCardElement;
    self.selectedCardElement;

    self.scoreElement;

    // -- CARDS
    self.values;
    self.suits;

    self.deck;
    self.flippedCards;
    self.aceCards;
    self.pileCards;
    self.selectedCard;

    self._handleClick = function(e) {
        if (self.origin) {
            self._computeMovement(e.currentTarget);
            self._restartTrackingMovement();

        }
        //first click
        else if (e.currentTarget.children.length > 0){
            self.origin = e.currentTarget.id;
            self._selectCard(e.currentTarget);
        }
    }  

    self._handleCardStackClick = function(e) {
        self._addFlippedCard();  
        self._drawFlippedCard();  
    }
  
    self.init();
}

Game.prototype.init = function() {
    var self = this;

    self.movesCounter = 0;
    self.hasCard = false;
    self.score = 0;
    self.deck = [];
    self.flippedCards = [];
    self.aceCards = [[],[],[],[]];
    self.pileCards = [[], [], [], [], [], [], []];

    self.finished = false;
    self.values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    self.suits = ['hearts', 'clubs', 'diamonds', 'spades'];
    self.width = window.innerWidth;
    self.height = window.innerHeight;

    self.buildLayout();
    self.createDeck();
    self.startGame();

}


Game.prototype._computeMovement = function(destinationElement) {
    var self = this;

    var destination = destinationElement.id;

    if (destination.includes('ace-stack') || destination.includes('card-pile')) {
        //view
        self._computeVisualDestination(destinationElement, destination)
        //data
        self._computeDataDestination(destination)
    }
}

Game.prototype._computeVisualDestination =  function (destinationElement, destination) {
    var self = this;
    
    var expand = false;

    if (destination.includes('card-pile')) {
        expand = true;
    }

    //------
    if(self.origin === 'flipped-card') {
        self._moveCardTo(destinationElement, expand);
        self._showNextFlippedCard();
    }
    if(self.origin.includes('ace-stack')){
        self._moveCardTo(destinationElement, expand);
        self._showNextAceCard();
    }
    if(self.origin.includes('card-pile')) {
        self._moveCardTo(destinationElement, expand);
        self._showNextPileCard();
    }
}

Game.prototype._computeDataDestination = function (destination) {
    var self = this;

    if (destination.includes('ace-stack')) {    
        var aceStackPosition = self._getNumberFrom(destination);
        self._addCardToAce(aceStackPosition)   
    }
    if (destination.includes('card-pile')) {
        var cardPilePosition = self._getNumberFrom(destination)
        self._addCardToPile(cardPilePosition);
    }  
}

Game.prototype._restartTrackingMovement = function() {
    var self = this;
    self._unselectCard();
    self.origin = null;
}

// ----- FLIPPED CARDS METHODS -----
Game.prototype._showNextFlippedCard = function() {
    var self = this;

    self._shiftFlippedCard();  
    self._drawFlippedCard();
}

Game.prototype._shiftFlippedCard = function () {
    var self = this;
    self.selectedCard = self.flippedCards.shift();
}   

Game.prototype._addFlippedCard = function() {
    var self = this;
    self.flippedCards.unshift(self.deck.shift());
}

//Pre:- The flippedCard it will be always at posision 0
Game.prototype._drawFlippedCard = function () {
    var self = this;
    var card = self.flippedCards[0];

    if (card) {
        var cardElement = card.createCardElement();
        self._removeChildOf(self.flippedCardElement);
        self.flippedCardElement.appendChild(cardElement);
    }
}

// ----- ACE CARDS METHODS -----

Game.prototype._showNextAceCard = function () {
    var self = this;
    var id = self.origin;

    var pos = self._getNumberFrom(id);
    self._shiftAceCard(pos);
    self._drawAceCard(pos);

}

Game.prototype._shiftAceCard = function (pos) {
    var self = this;
    self.selectedCard = self.aceCards[pos].shift();
}

Game.prototype._addCardToAce = function (pos) {
    var self = this;
    
    self.aceCards[pos].unshift(self.selectedCard);
}

//Pre:- The aceCard it will be always at posision 0
Game.prototype._drawAceCard = function (pos) {
    var self = this;

    var card = self.aceCards[pos][0];

    if (card) {
        var cardElement = card.createCardElement();
        self.aceCardElement.children[pos].appendChild(cardElement);
    }
}

// ----- PILE CARDS METHODS -----
Game.prototype._showNextPileCard = function() {
    //Remove the ones we move
    var self = this;
    var id = self.origin;

    var pos = self._getNumberFrom(id);
    self._shiftPileCard(pos);  
}

// -- DANIELLE DID ITTTTTT!!!
Game.prototype._addCardToPile = function (pos) {
    var self = this;
    self.pileCards[pos].unshift(self.selectedCard);

} 

Game.prototype._shiftPileCard = function (pos) {
    var self = this;

    self.pileCards[pos].pop();
}   

Game.prototype._drawPileCard = function (pos) {
    var self = this;
    var parentElement = self.selectedCardElement.parentElement;
    self._removeChildOf(parentElement);
}

// ----- ELEMENTS CARDS METHODS -----
Game.prototype._moveCardTo = function (elem, expand) {
    var self = this;
    if (!expand) {
        self._removeChildOf(elem);
    }
    elem.appendChild(self.selectedCardElement);
}

 //Pre:- The number it will be at the end of id
Game.prototype._getNumberFrom = function (id) {
    return id.slice(id.length - 1);
}

//TODO:- Change name and behaviour
Game.prototype._removeChildOf = function (element) {
    if (element.children.length > 0) {
        element.removeChild(element.lastChild);
    }
}

Game.prototype.startGame = function() {
    //show all the cards in the "Zone 3"
    var self = this;
}

Game.prototype._selectCard = function(element) {
    var self = this;
    
    if (element.id.includes('card-pile')) {
        self.selectedCardElement = self._getChildrenElementInPosition(element, element.children.length - 1);
    } 
    else {
        self.selectedCardElement = self._getChildrenElementInPosition(element, 0);
    }

    self.selectedCardElement.classList.add('on');
}

Game.prototype._unselectCard = function () {
    var self = this;

    self.selectedCardElement.classList.remove('on'); 
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
    self.aceCardElement = document.createElement('div');
    self.aceCardElement.setAttribute('class', "ace-space");

    for (var j = 0; j < 4; j++) {
        var aceStack = document.createElement('div');
        aceStack.setAttribute('class', 'ace-stack');
        aceStack.setAttribute('id', 'ace-stack' + j);
        aceStack.addEventListener('click', self._handleClick);
        self.aceCardElement.appendChild(aceStack);
    }

    self.gameElement.appendChild(self.aceCardElement);

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
    self.pileCardElement = document.createElement('div');
    self.pileCardElement.setAttribute('class', 'card-piles-container');

    //HOW DO I ADD A GD ID IN A LOOP
    for (var i = 0; i < 7; i++) {
        var cardPile = document.createElement('div');
        cardPile.setAttribute('class', 'card-pile');
        cardPile.setAttribute('id', 'card-pile' +i);
        cardPile.addEventListener('click', self._handleClick);
        self.pileCardElement.appendChild(cardPile);
    }
    self.gameElement.appendChild(self.pileCardElement);

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

