let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";

function generateRandom() {
  let a = Math.floor(Math.random() * 13) + 1;
  if (a === 1) return 11;
  else if (a >= 11) return 10;
  else return a;
}

function renderGame() {
  document.getElementById("cards").textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++)
    document.getElementById("cards").textContent += cards[i] + " ";
  document.getElementById("sum").textContent = "Sum: " + sum;
  if (sum <= 20) message = "Do you want to draw a new card?";
  else if (sum == 21) {
    message = "You have got a BlackJack!";
    hasBlackjack = true;
  } else {
    message = "You are out of the game!";
    isAlive = false;
  }
  document.getElementById("one").textContent = message;
}
function newCard() {
  if (isAlive && !hasBlackjack) {
    let card = generateRandom();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

function startGame() {
  isAlive = true;
  let a = generateRandom();
  let b = generateRandom();
  cards = [a, b];
  sum = a + b;
  renderGame();
}
