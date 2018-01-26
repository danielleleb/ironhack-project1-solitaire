

'use strict';

var CARDS = [
    { suit: 'spades', value: '2', img: './PNG-cards-1.3/2_of_spades.png' },
    { suit: 'spades', value: '3', img: './PNG-cards-1.3/3_of_spades.png' },
    { suit: 'spades', value: '4', img: './PNG-cards-1.3/4_of_spades.png' },
    { suit: 'spades', value: '5', img: './PNG-cards-1.3/5_of_spades.png' },
    { suit: 'spades', value: '6', img: './PNG-cards-1.3/6_of_spades.png' },
    { suit: 'spades', value: '7', img: './PNG-cards-1.3/7_of_spades.png' },
    { suit: 'spades', value: '8', img: './PNG-cards-1.3/8_of_spades.png' },
    { suit: 'spades', value: '9', img: './PNG-cards-1.3/9_of_spades.png' },
    { suit: 'spades', value: '10', img: './PNG-cards-1.3/10_of_spades.png' },
    { suit: 'spades', value: 'J', img: './PNG-cards-1.3/jack_of_spades.png' },
    { suit: 'spades', value: 'Q', img: './PNG-cards-1.3/queen_of_spades.png' },
    { suit: 'spades', value: 'K', img: './PNG-cards-1.3/king_of_spades.png' },
    { suit: 'spades', value: 'A', img: './PNG-cards-1.3/ace_of_spades.png' },

    { suit: 'clubs', value: '2', img: './PNG-cards-1.3/2_of_clubs.png' },
    { suit: 'clubs', value: '3', img: './PNG-cards-1.3/3_of_clubs.png' },
    { suit: 'clubs', value: '4', img: './PNG-cards-1.3/4_of_clubs.png' },
    { suit: 'clubs', value: '5', img: './PNG-cards-1.3/5_of_clubs.png' },
    { suit: 'clubs', value: '6', img: './PNG-cards-1.3/6_of_clubs.png' },
    { suit: 'clubs', value: '7', img: './PNG-cards-1.3/7_of_clubs.png' },
    { suit: 'clubs', value: '8', img: './PNG-cards-1.3/8_of_clubs.png' },
    { suit: 'clubs', value: '9', img: './PNG-cards-1.3/9_of_clubs.png' },
    { suit: 'clubs', value: '10', img: './PNG-cards-1.3/10_of_clubs.png' },
    { suit: 'clubs', value: 'J', img: './PNG-cards-1.3/jack_of_clubs.png' },
    { suit: 'clubs', value: 'Q', img: './PNG-cards-1.3/queen_of_clubs.png' },
    { suit: 'clubs', value: 'K', img: './PNG-cards-1.3/king_of_clubs.png' },
    { suit: 'clubs', value: 'A', img: './PNG-cards-1.3/ace_of_clubs.png' },

    { suit: 'diamonds', value: '2', img: './PNG-cards-1.3/2_of_diamonds.png' },
    { suit: 'diamonds', value: '3', img: './PNG-cards-1.3/3_of_diamonds.png' },
    { suit: 'diamonds', value: '4', img: './PNG-cards-1.3/4_of_diamonds.png' },
    { suit: 'diamonds', value: '5', img: './PNG-cards-1.3/5_of_diamonds.png' },
    { suit: 'diamonds', value: '6', img: './PNG-cards-1.3/6_of_diamonds.png' },
    { suit: 'diamonds', value: '7', img: './PNG-cards-1.3/7_of_diamonds.png' },
    { suit: 'diamonds', value: '8', img: './PNG-cards-1.3/8_of_diamonds.png' },
    { suit: 'diamonds', value: '9', img: './PNG-cards-1.3/9_of_diamonds.png' },
    { suit: 'diamonds', value: '10', img: './PNG-cards-1.3/10_of_diamonds.png' },
    { suit: 'diamonds', value: 'J', img: './PNG-cards-1.3/jack_of_diamonds.png' },
    { suit: 'diamonds', value: 'Q', img: './PNG-cards-1.3/queen_of_diamonds.png' },
    { suit: 'diamonds', value: 'K', img: './PNG-cards-1.3/king_of_diamonds.png' },
    { suit: 'diamonds', value: 'A', img: './PNG-cards-1.3/ace_of_diamonds.png' },

    { suit: 'hearts', value: '2', img: './PNG-cards-1.3/2_of_hearts.png' },
    { suit: 'hearts', value: '3', img: './PNG-cards-1.3/3_of_hearts.png' },
    { suit: 'hearts', value: '4', img: './PNG-cards-1.3/4_of_hearts.png' },
    { suit: 'hearts', value: '5', img: './PNG-cards-1.3/5_of_hearts.png' },
    { suit: 'hearts', value: '6', img: './PNG-cards-1.3/6_of_hearts.png' },
    { suit: 'hearts', value: '7', img: './PNG-cards-1.3/7_of_hearts.png' },
    { suit: 'hearts', value: '8', img: './PNG-cards-1.3/8_of_hearts.png' },
    { suit: 'hearts', value: '9', img: './PNG-cards-1.3/9_of_hearts.png' },
    { suit: 'hearts', value: '10', img: './PNG-cards-1.3/10_of_hearts.png' },
    { suit: 'hearts', value: 'J', img: './PNG-cards-1.3/jack_of_hearts.png' },
    { suit: 'hearts', value: 'Q', img: './PNG-cards-1.3/queen_of_hearts.png' },
    { suit: 'hearts', value: 'K', img: './PNG-cards-1.3/king_of_hearts.png' },
    { suit: 'hearts', value: 'A', img: './PNG-cards-1.3/ace_of_hearts.png' }
    
]

function Game(mainElement, timer) {
    var self = this;
    
    self.mainElement = mainElement;
    self.timerCounter = timer;
    
    self.finished;
    self.gameOver;
    self.score;
    self.width;
    self.height;
    self.movesCounter = 0;
    
    self.origin;
    
    // -- ELEMENTS
    self.gameElement;
    self.cardStackElement;
    self.flippedCardElement;
    self.aceCardElement;
    self.pileCardElement;
    self.selectedCardElement;
    self.scoreElement;
    self.movesElement;

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
            console.log(self.movesCounter);
        }
        //first click
        else if (e.currentTarget.children.length > 0){
            self.origin = e.currentTarget.id;
            self._selectCard(e.currentTarget);
        }
    }  

    self._handleCardStackClick = function() {
        self._addFlippedCard();  
        self._drawFlippedCard();  
    }

    self._handleGiveUpClick = function () {
        self.gameOver(self.movesCounter);
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
        self._computeVisualDestination(destinationElement, destination);
        //data
        self._computeDataDestination(destination);
        self.movesCounter++;
        self._updateMoves(self.movesCounter)
    }
}

Game.prototype._updateMoves = function(mover) {
    var self = this;
    self.movesElement.innerText = "Moves: " + mover;
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

    self.movesElement = document.createElement('h3');
    self.movesElement.setAttribute('class', 'moves');
    self.movesElement.innerText = "Moves: " + self.movesCounter;
    self.scoreElement.appendChild(self.movesElement);

    
    self.gameElement.appendChild(self.scoreElement);

    //Button give up
    var button = document.createElement('button');
    button.innerText = 'Give up';
    button.setAttribute('class', 'give-up')
    button.addEventListener('click', self._handleGiveUpClick);
    self.scoreElement.appendChild(button);
    // MAIN APPEND
    self.mainElement.appendChild(self.gameElement);
}

Game.prototype.onGameOver = function (callback) {
    var self = this;

    self.gameOver = callback;
}

Game.prototype.createDeck = function (){
    var self = this;
   
    for (var i = 0; i < CARDS.length; i++) {
        var suit = CARDS[i].suit;
        var value = CARDS[i].value;
        var img = CARDS[i].img;
        var newCard = new Card(value, suit, img, self.gameElement);
        self.deck.push(newCard);
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

