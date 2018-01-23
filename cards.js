'use strict';
//states = cover - stack
function Card(value, suit, containerElement) {
    var self = this;

    self.value = value;
    self.suit = suit;
    self.containerElement = containerElement;

}

Card.prototype.draw = function(containerElement) {
    var self = this;

    var cardElement = document.createElement('div');

    var cardSuit = document.createElement('h1');
    cardSuit.innerText = self.suit
    cardElement.appendChild(cardSuit);

    var cardValue = document.createElement('h2');
    cardValue.innerText = self.value
    cardElement.appendChild(cardValue);

    containerElement.appendChild(cardElement);
}