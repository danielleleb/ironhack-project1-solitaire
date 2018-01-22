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

    // -- CARDS
    self.values;
    self.suits;
    self.cards;

    self.init();
}

Game.prototype.init = function() {
    var self = this;

    self.movesCounter = 0;
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
    
    self.showCard();

}

Game.prototype.showCard = function() {
    var self = this;
    var flippedElement = self.freeCardsElement.children[1];

    var cardElement = document.createElement('div');

    var cardSuit = document.createElement('h1');
    cardSuit.innerText = self.cards[0].suit;
    cardElement.appendChild(cardSuit);

    var cardValue = document.createElement('h2');
    cardValue.innerText = self.cards[0].value;
    cardElement.appendChild(cardValue);

    flippedElement.appendChild(cardElement);
    
    // $(cardElement).focusin(function() {
    //     $(cardElement).css('background-color','2px solid blue')
    // })

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
    self.aceSpaceElement.appendChild(aceStack1);

    var aceStack2 = document.createElement('div');
    aceStack2.setAttribute('class', 'ace-stack');
    self.aceSpaceElement.appendChild(aceStack2);

    var aceStack3 = document.createElement('div');
    aceStack3.setAttribute('class', 'ace-stack');
    self.aceSpaceElement.appendChild(aceStack3);

    var aceStack4 = document.createElement('div');
    aceStack4.setAttribute('class', 'ace-stack');
    self.aceSpaceElement.appendChild(aceStack4);

    self.gameElement.appendChild(self.aceSpaceElement);

    // TOP LEFT CORNER FREE CARDS
    self.freeCardsElement = document.createElement('div');
    self.freeCardsElement.setAttribute('class', 'free-cards');
    
    var cardStack = document.createElement('div');
    cardStack.setAttribute('class','card-stack');
    self.freeCardsElement.appendChild(cardStack);
    
    var flippedCard = document.createElement('div');
    flippedCard.setAttribute('class','flipped-card');
    self.freeCardsElement.appendChild(flippedCard);
    
    self.gameElement.appendChild(self.freeCardsElement);

    // CARD PILES IN CENTER
    self.cardsPilesElement = document.createElement('div');
    self.cardsPilesElement.setAttribute('class', 'card-piles-container');


    for (var i = 0; i < 7; i++) {
        var cardPile = document.createElement('div');
        cardPile.setAttribute('class', 'card-pile');
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
            var newCard = new Card(value, suit);
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