import '../styles/Cards.css';
import { useState } from 'react';
import { foodData } from '../constants/cardData';
import shuffleArray from '../utils/shuffleArray';

export default function Cards({ level }) {
  // Get foodData array for each level and randomise its contents
  const levelOneCards = foodData.slice(0, 3); // Three cards
  const levelTwoCards = foodData.slice(0, 6); // Sixe cards
  const levelThreeCards = foodData.slice(0, 9); // Nine cards
  const levelFourCards = foodData; // Twelve cards

  let cardLevel;
  if (level === 1) cardLevel = levelOneCards;
  else if (level === 2) cardLevel = levelTwoCards;
  else if (level === 3) cardLevel = levelThreeCards;
  else cardLevel = levelFourCards;

  const [cards, setCards] = useState(shuffleArray(cardLevel));

  (useState(() => {
    setCards(shuffleArray(cardLevel));
  }),
    [level]);

  return (
    <div className="cards">
      {cards.map((card) => (
        <button
          key={card.id}
          className="card"
          onClick={() => setCards(shuffleArray(cardLevel))} // Randomise cards after each click
        >
          <div className="card-contents">
            <img src={card.url} alt="sushi" />
            <p>{card.name}</p>
          </div>
        </button>
      ))}
    </div>
  );
}
