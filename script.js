const items = ['🦁', '🐘', '🐯', '🐱', '🐶', '🐰', '🐦', '🦊'];
let cards = [...items, ...items];
cards = cards.sort(() => 0.5 - Math.random());

const gameBoard = document.getElementById('gameBoard');
let flippedCards = [];
let matched = 0;

cards.forEach((item, index) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.item = item;
  card.dataset.index = index;
  card.innerText = '';

  card.addEventListener('click', () => {
    if (
      card.classList.contains('flipped') ||
      flippedCards.length === 2
    ) return;

    card.classList.add('flipped');
    card.innerText = item;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (first.dataset.item === second.dataset.item) {
        matched += 1;
        flippedCards = [];
        if (matched === items.length) {
          setTimeout(() => alert('You Win! All pairs matched!'), 500);
        }
      } else {
        setTimeout(() => {
          first.classList.remove('flipped');
          second.classList.remove('flipped');
          first.innerText = '';
          second.innerText = '';
          flippedCards = [];
        }, 800);
      }
    }
  });

  gameBoard.appendChild(card);
});
