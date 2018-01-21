'use strict';

function Game(mainElement) {
    var self = this;
    
    self.mainElement = mainElement;
    self.finished = false;
    self.score = 0;

    self.width = window.innerWidth;
    self.height = window.innerHeight;

    var STARTING_TIME = 0;
    var NUMBER_OF_MOVES = 0;


    //create dom elements

    self.backgroundElement = document.createElement('div');
    self.backgroundElement.setAttribute('id', 'background');
    $(self.backgroundElement).css('height', self.height);
    $(self.backgroundElement).css('width', self.width);
    mainElement.appendChild(self.backgroundElement);


    ///// TOP RIGHT CORNER ACES
    self.aceSpace = document.createElement('div');
    self.aceSpace.setAttribute('class', "ace-space");
    self.backgroundElement.appendChild(self.aceSpace);

    self.aceStack1 = document.createElement('div');
    self.aceStack1.setAttribute('class', 'ace-stack');
    self.aceSpace.appendChild(self.aceStack1);

    self.aceStack2 = document.createElement('div');
    self.aceStack2.setAttribute('class', 'ace-stack');
    self.aceSpace.appendChild(self.aceStack2);

    self.aceStack3 = document.createElement('div');
    self.aceStack3.setAttribute('class', 'ace-stack');
    self.aceSpace.appendChild(self.aceStack3);

    self.aceStack4 = document.createElement('div');
    self.aceStack4.setAttribute('class', 'ace-stack');
    self.aceSpace.appendChild(self.aceStack4);

    // for (i = 0; i>= 4; i++) {
    //     self.backgroundElement.appendChild('.ace-space');
    // }
    // $(self.aceSpaces).css('height', '100px');
    // $(self.aceSpaces).css('width', '100px');
    // $(self.aceSpaces).css('border', '2px solid black');

    // TOP LEFT CORNER 

    self.freeCards = document.createElement('div');
    self.freeCards.setAttribute('class', 'free-cards');
    self.backgroundElement.appendChild(self.freeCards);

    self.cardStack = document.createElement('div');
    self.cardStack.setAttribute('class','card-stack');
    self.freeCards.appendChild(self.cardStack);
    
    self.flippedCard = document.createElement('div');
    self.flippedCard.setAttribute('class','flipped-card');
    self.freeCards.appendChild(self.flippedCard);

    //CARD PILES IN CENTER

    self.cardPilesContainer = document.createElement('div');
    self.cardPilesContainer.setAttribute('class', 'card-piles-container');
    self.backgroundElement.appendChild(self.cardPilesContainer);

    self.cardPile = document.createElement('div');
    self.cardPile.setAttribute('class', 'card-pile');
    self.cardPilesContainer.appendChild(self.cardPile);

    self.cardPile = document.createElement('div');
    self.cardPile.setAttribute('class', 'card-pile');
    self.cardPilesContainer.appendChild(self.cardPile);

    self.cardPile = document.createElement('div');
    self.cardPile.setAttribute('class', 'card-pile');
    self.cardPilesContainer.appendChild(self.cardPile);

    self.cardPile = document.createElement('div');
    self.cardPile.setAttribute('class', 'card-pile');
    self.cardPilesContainer.appendChild(self.cardPile);

    self.cardPile = document.createElement('div');
    self.cardPile.setAttribute('class', 'card-pile');
    self.cardPilesContainer.appendChild(self.cardPile);

    self.cardPile = document.createElement('div');
    self.cardPile.setAttribute('class', 'card-pile');
    self.cardPilesContainer.appendChild(self.cardPile);

    self.cardPile = document.createElement('div');
    self.cardPile.setAttribute('class', 'card-pile');
    self.cardPilesContainer.appendChild(self.cardPile);

    self.scoreContainer = document.createElement('div');
    self.scoreContainer.setAttribute('class', 'score-container');
    self.backgroundElement.appendChild(self.scoreContainer);

    self.moves = document.createElement('h3');
    self.moves.setAttribute('class', 'moves');
    self.moves.innerText = "moves: " + NUMBER_OF_MOVES;
    self.scoreContainer.appendChild(self.moves);

    self.timer = document.createElement('h3');
    self.timer.setAttribute('class', 'timer');
    self.timer.innerText = "time: " + STARTING_TIME;
    self.scoreContainer.appendChild(self.timer);

}

Game.prototype.destroy = function(){
    var self = this;
    self.finished = true;
    self.backgroundElement.remove();
}