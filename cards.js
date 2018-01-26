'use strict';
//states = cover - stack
function Card(value, suit, img, containerElement) {
    var self = this;

    self.value = value;
    self.suit = suit;
    self.containerElement = containerElement;
    self.img = img;

    // self.deck = [
    //     { suit: 'spades', value: '2', src: './PNG-cards-1.3/2_of_spades.png' },
    //     { suit: 'spades', value: '3', src: './PNG-cards-1.3/3_of_spades.png' },
    //     { suit: 'spades', value: '4', src: './PNG-cards-1.3/4_of_spades.png' },
    //     { suit: 'spades', value: '5', src: './PNG-cards-1.3/5_of_spades.png' },
    //     { suit: 'spades', value: '6', src: './PNG-cards-1.3/6_of_spades.png' },
    //     { suit: 'spades', value: '7', src: './PNG-cards-1.3/7_of_spades.png' },
    //     { suit: 'spades', value: '8', src: './PNG-cards-1.3/8_of_spades.png' },
    //     { suit: 'spades', value: '9', src: './PNG-cards-1.3/9_of_spades.png' },
    //     { suit: 'spades', value: '10', src: './PNG-cards-1.3/10_of_spades.png' },
    //     { suit: 'spades', value: 'J', src: './PNG-cards-1.3/jack_of_spades.png' },
    //     { suit: 'spades', value: 'Q', src: './PNG-cards-1.3/queen_of_spades.png' },
    //     { suit: 'spades', value: 'K', src: './PNG-cards-1.3/king_of_spades.png' },
    //     { suit: 'spades', value: 'A', src: './PNG-cards-1.3/ace_of_spades.png' },
    
    //     { suit: 'clubs', value: '2', src: './PNG-cards-1.3/2_of_clubs.png' },
    //     { suit: 'clubs', value: '3', src: './PNG-cards-1.3/3_of_clubs.png' },
    //     { suit: 'clubs', value: '4', src: './PNG-cards-1.3/4_of_clubs.png' },
    //     { suit: 'clubs', value: '5', src: './PNG-cards-1.3/5_of_clubs.png' },
    //     { suit: 'clubs', value: '6', src: './PNG-cards-1.3/6_of_clubs.png' },
    //     { suit: 'clubs', value: '7', src: './PNG-cards-1.3/7_of_clubs.png' },
    //     { suit: 'clubs', value: '8', src: './PNG-cards-1.3/8_of_clubs.png' },
    //     { suit: 'clubs', value: '9', src: './PNG-cards-1.3/9_of_clubs.png' },
    //     { suit: 'clubs', value: '10', src: './PNG-cards-1.3/10_of_clubs.png' },
    //     { suit: 'clubs', value: 'J', src: './PNG-cards-1.3/jack_of_clubs.png' },
    //     { suit: 'clubs', value: 'Q', src: './PNG-cards-1.3/queen_of_clubs.png' },
    //     { suit: 'clubs', value: 'K', src: './PNG-cards-1.3/king_of_clubs.png' },
    //     { suit: 'clubs', value: 'A', src: './PNG-cards-1.3/ace_of_clubs.png' },
    
    //     { suit: 'diamonds', value: '2', src: './PNG-cards-1.3/2_of_diamonds.png' },
    //     { suit: 'diamonds', value: '3', src: './PNG-cards-1.3/3_of_diamonds.png' },
    //     { suit: 'diamonds', value: '4', src: './PNG-cards-1.3/4_of_diamonds.png' },
    //     { suit: 'diamonds', value: '5', src: './PNG-cards-1.3/5_of_diamonds.png' },
    //     { suit: 'diamonds', value: '6', src: './PNG-cards-1.3/6_of_diamonds.png' },
    //     { suit: 'diamonds', value: '7', src: './PNG-cards-1.3/7_of_diamonds.png' },
    //     { suit: 'diamonds', value: '8', src: './PNG-cards-1.3/8_of_diamonds.png' },
    //     { suit: 'diamonds', value: '9', src: './PNG-cards-1.3/9_of_diamonds.png' },
    //     { suit: 'diamonds', value: '10', src: './PNG-cards-1.3/10_of_diamonds.png' },
    //     { suit: 'diamonds', value: 'J', src: './PNG-cards-1.3/jack_of_diamonds.png' },
    //     { suit: 'diamonds', value: 'Q', src: './PNG-cards-1.3/queen_of_diamonds.png' },
    //     { suit: 'diamonds', value: 'K', src: './PNG-cards-1.3/king_of_diamonds.png' },
    //     { suit: 'diamonds', value: 'A', src: './PNG-cards-1.3/ace_of_diamonds.png' },
    
    //     { suit: 'hearts', value: '2', src: './PNG-cards-1.3/2_of_hearts.png' },
    //     { suit: 'hearts', value: '3', src: './PNG-cards-1.3/3_of_hearts.png' },
    //     { suit: 'hearts', value: '4', src: './PNG-cards-1.3/4_of_hearts.png' },
    //     { suit: 'hearts', value: '5', src: './PNG-cards-1.3/5_of_hearts.png' },
    //     { suit: 'hearts', value: '6', src: './PNG-cards-1.3/6_of_hearts.png' },
    //     { suit: 'hearts', value: '7', src: './PNG-cards-1.3/7_of_hearts.png' },
    //     { suit: 'hearts', value: '8', src: './PNG-cards-1.3/8_of_hearts.png' },
    //     { suit: 'hearts', value: '9', src: './PNG-cards-1.3/9_of_hearts.png' },
    //     { suit: 'hearts', value: '10', src: './PNG-cards-1.3/10_of_hearts.png' },
    //     { suit: 'hearts', value: 'J', src: './PNG-cards-1.3/jack_of_hearts.png' },
    //     { suit: 'hearts', value: 'Q', src: './PNG-cards-1.3/queen_of_hearts.png' },
    //     { suit: 'hearts', value: 'K', src: './PNG-cards-1.3/king_of_hearts.png' },
    //     { suit: 'hearts', value: 'A', src: './PNG-cards-1.3/ace_of_hearts.png' }
        
    // ]

}

Card.prototype.createCardElement = function() {
    var self = this;

    var cardElement = document.createElement('div');
    cardElement.setAttribute('class', 'card');

    var imgCard = document.createElement('img');
    imgCard.classList.add('card-image');
    imgCard.setAttribute('src', self.img);
    cardElement.appendChild(imgCard);

    // var cardSuit = document.createElement('h1');
    // cardSuit.innerText = self.suit
    // cardElement.appendChild(cardSuit);

    // var cardValue = document.createElement('h2');
    // cardValue.innerText = self.value
    //cardElement.appendChild(cardValue);

    return cardElement;
}




