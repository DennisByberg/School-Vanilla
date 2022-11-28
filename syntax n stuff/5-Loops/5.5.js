// Generate a deck of 52 cards where each card contains a suit ( suite ) and a value between 2 and 14 ( ace ).

const suits = ["spades", "hearts", "diamonds", "clover"];
const cards = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "jack",
  "queen",
  "king",
  "ace",
];
let totalCards = [];

for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < cards.length; j++) {
    console.log(`${cards[j]} of ${suits[i]}`);
    totalCards.push(`${cards[j]} of ${suits[i]}`);
  }
}

console.log(totalCards);
console.log(totalCards.length);
