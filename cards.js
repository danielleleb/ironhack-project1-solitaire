'use strict';
// function card(value, name, suit) {
//     // this.value = value;
//     this.name = name;
//     this.suit = suit;
// }
// var cards = [];
// game = new Game(mainElement);


function deck() {
    var names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    var suits = ['hearts', 'clubs', 'diamonds', 'spades'];
    var cards = [];
    for (var i = 0; i < suits.length; i++) {
        for (var j = 0; j < names.length; j++) {
            var card = {}
            card.suit = suits[i];
            card.name = names[j];
            // var cardImg = document.createElement('div');
            // game.cardStack.appendChild(cardImg);
            // cardSuit = document.createElement('h1');
            // cardSuit.innerText = suits[i];
            // cardImg.appendChild(cardSuit);
            // cardName = document.createElement('h2');
            // cardName.innerText = names[j];
            // cardImg.appendChild(cardName);
            

            cards.push(card);
        }
    }
    console.log(cards);

}

function makeCard(suit, name) {
    let xAxis = 0;
    let yAxis = 0;

    if (suit == 'hearts') {
        yAxis = 0        
    }
    else if (suit == 'spades') {
        yAxis = 129;
    }
    else if (suit == '') {

    }
}
deck();