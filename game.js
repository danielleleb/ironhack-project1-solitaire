'use strict';

function Game(mainElement, timer) {
    var self = this;
    
    self.mainElement = mainElement;
    self.timerCounter = timer;
    
    self.gameElement;
    self.freeCardsElement;
    self.aceSpaceElement;
    self.cardsPilesElement;
    self.scoreElement;

    self.finished;
    self.score;
    self.width;
    self.height;
    self.movesCounter;
    self.hasCard;
    self.selectedCard;

    // -- CARDS
    self.values;
    self.suits;
    self.cards;
    self.nextCard;
    self.topCard;
    

    self._handleClick = function(e) {
        console.log(e.currentTarget);
    
        if (self.hasCard) {
            var destinationElement = e.currentTarget;
            destinationElement.appendChild(self.selectedCard);
    
            self.selectedCard.classList.remove('on');
            self.hasCard = false;
            
            // self.reStockFlippedCard();
    
        }
        else if (e.currentTarget.children.length > 0){

            self.hasCard = true;
            self.selectedCard = self._getChildrenElementInPosition(e.currentTarget, 0);
            self.selectedCard.classList.add('on');
    
        }
    }  
    self._handleCardStackClick = function(e) {
        self.flippedCardElement = self._getChildrenElementInPosition(self.freeCardsElement, 1);

        if (self.flippedCardElement.children.length === 0) {
            self._getNextCard();
            self.nextCard.draw(self.flippedCardElement);
        }
        else if (self.flippedCardElement.children.length > 0) {
            var prevCard = self._getChildrenElementInPosition(self.flippedCardElement, 0)
            self._getNextCard();
            var newestCard = self.nextCard.draw(self.flippedCardElement);

           $(prevCard).replaceWith(newestCard);
            // // self.cardElement = self._getChildrenElementInPosition(self.flippedCardElement, 0);
            // self.topCard = self._getChildrenElementInPosition(self.flippedCardElement, 1)
            // self.topCard.add.classList('on-top')


        }
    }
    self.init();
}

Game.prototype.init = function() {
    var self = this;

    self.movesCounter = 0;
    self.hasCard = false;
    self.score = 0;
    self.cards = [];

    self.finished = false;
    self.values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    self.suits = ['hearts', 'clubs', 'diamonds', 'spades'];
    self.width = window.innerWidth;
    self.height = window.innerHeight;

    self.buildLayout();
    self.createDeck();
    self.startGame();
}

Game.prototype.startGame = function() {
    var self = this;

    self._getNextCard();
    self.flippedCardElement = self._getChildrenElementInPosition(self.freeCardsElement, 1);
    self.nextCard.draw(self.flippedCardElement);

}

Game.prototype._getChildrenElementInPosition = function(element, pos) {
    return element.children[pos];
}

Game.prototype._getNextCard = function() {
    var self = this;
    
    self.nextCard = self.cards.shift();
}

// What Byron wrote earlier and what I tried to do

    // $('.card-pile:first').append($('.on'))
    // if (e.currentTarget.children.length > 0) {
    //     var selectCard = e.currentTarget.children;
    //     $('.card-pile:first').append(selectCard);
    //     }
    // else if (e.currentTarget.children.length == 0) {
    //     self.flippedCard.appendChild(self.nextCard)
    // }
    
    // First checkt whicht state we are self.currentStatee = 0
        //if e.currentTarge has children.length > 0 => we have at leats one card. Let's take the last one!
        // get children and update State
    // self.currentState = 1
    // we take the card, and move to the e.currentTarget and update state

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
    self.freeCardsElement = document.createElement('div');
    self.freeCardsElement.setAttribute('class', 'free-cards');
    
    self.cardStackElement = document.createElement('div');
    self.cardStackElement.setAttribute('class','card-stack');
    self.freeCardsElement.appendChild(self.cardStackElement);
    self.cardStackElement.addEventListener('click', self._handleCardStackClick)

    var flippedCard = document.createElement('div');
    flippedCard.setAttribute('class','flipped-card');
    flippedCard.addEventListener('click', self._handleClick);
    self.freeCardsElement.appendChild(flippedCard);
    
    self.gameElement.appendChild(self.freeCardsElement);

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
            self.cards.push(newCard);
        }   
    }

    self.shuffleCards();
}

Game.prototype.shuffleCards = function (){
    var self = this;
    var temporaryValue; 
    var randomIndex;
    var currentIndex = self.cards.length - 1; 

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        temporaryValue = self.cards[currentIndex];
        self.cards[currentIndex] = self.cards [randomIndex];
        self.cards[randomIndex] = temporaryValue;

        currentIndex -= 1;
    }
}

Game.prototype.destroy = function(){
    var self = this;
    self.finished = true;
    self.gameElement.remove();
}







// Game.prototype.dealCards = function(cardsArr) {
//     // var self = this;
//     // for (var k = 0; k <= cardsArr.length; k++) {
//     //    var name = cardsArr[k].name[k];
//     //    var suit = cardsArr[k].suit[k];
//     // self.cardImg = document.createElement('div');
//     // self.cardImg.setAttribute('class', 'card');
//     // self.cardStack.appendChild(self.cardImg);
//     // self.cardSuit = document.createElement('h1');
//     // self.cardSuit.innerText = suit;
//     // self.cardImg.appendChild(self.cardSuit);
//     // self.cardName = document.createElement('h2');
//     // self.cardName.innerText = name;
//     // self.cardImg.appendChild(self.cardName);

//     }
// }




/// ---- not sure if i need this anymore or not

  // var shuffleCards = function(cards) {
    //     var currentIndex = cards.length, temporaryValue, randomIndex;

    //     while (0 !== currentIndex) {
    //         randomIndex = Math.floor(Math.random() * currentIndex);
    //         currentIndex -= 1
       
    //        temporaryValue = cards[currentIndex];
    //        cards[currentIndex] = cards[randomIndex];
    //        cards[randomIndex] = temporaryValue
    //     }
    //     return self.cards;
    // }



// ---- a sad attempt at making the cards


// Game.prototype.makeCards = function() {
//     self= this;
//     // game = new Game(mainElement);
//     self.names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
//     self.suits = ['hearts', 'clubs', 'diamonds', 'spades'];
//     self.cards = [];
//     for (var i = 0; i < self.suits.length; i++) {
//         for (var j = 0; j < self.names.length; j++) {
//             self.card = {};
//             self.card.suit = self.suits[i];
//             self.card.name = self.names[j];
            
//             // self.cardImg = document.createElement('div');
//             // self.cardImg.setAttribute('class', 'card');
//             // self.cardStack.appendChild(self.cardImg);
//             // self.cardSuit = document.createElement('h1');
//             // self.cardSuit.innerText = self.suits[i];
//             // self.cardImg.appendChild(self.cardSuit);
            
//             // self.cardName = document.createElement('h2');
//             // self.cardName.innerText = self.names[j];
//             // self.cardImg.appendChild(self.cardName);

//             self.cards.push(self.card);
//         }
//     }
    

  
    
    // console.log(self.cards);
    // self.cards.forEach(function(cards) {
    //     // var self = this;
    //     // var suits = cards.suits;
    //     // var names = cards.names;

    //     self.cardImg = document.createElement('div');
    //     self.cardImg.setAttribute('class', 'card');
    //     self.cardStack.appendChild(self.cardImg);
    //     self.cardSuit = document.createElement('h1');
    //     self.cardSuit.innerText = cards.suit;
    //     self.cardImg.appendChild(self.cardSuit);
        
    //     self.cardName = document.createElement('h2');
    //     self.cardName.innerText = cards.name;
    //     self.cardImg.appendChild(self.cardName);

    // })
// console.log(self.cards);
// }