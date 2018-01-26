'use strict';

// ---- ACES
if (self.aceCardElement.children[pos] == 0 && self.selectedCard.value == 'A') {
    move card
}
else if (self.aceCardElement[pos][0].value == self.selectedCard.value + 1 && self.aceCardElement[pos][0].suit == self.selectedCard.suit) {
    move card 
}

else {
    return card back home
}



// ---- CARD PILES

if (card.suit == 'spades'||'clubs') {
    card.color = 'black'
}
if (card.suit == 'hearts' || 'diamonds') {
    card.color = 'red'
}

if (self.cardPileElement.children[pos] == 0 && self.selectedCard == 'K') {
    move card
}

else if (self.cardPileElement[pos][0].value == self.selectedCard.value - 1 && self.cardPileElement[pos][0].color !== self.selectedCard.color) {
    move card
}


// ----- win the game 
if (self.aceCardElement.children.length == 52) {
    win the game!!!!!
}