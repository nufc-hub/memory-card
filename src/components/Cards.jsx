import '../styles/Cards.css';
import { useState } from 'react';
import { foodData } from '../constants/cardData';
import Card from './Card';
import shuffleArray from '../utils/shuffleArray';

export default function Cards({ level }) {
  // Get foodData array for each level and randomise its contents
  const levelOneCards = foodData.slice(0, 3); // Three cards
  const levelTwoCards = foodData.slice(0, 6); // Six cards
  const levelThreeCards = foodData.slice(0, 9); // Nine cards
  const levelFourCards = foodData; // Twelve cards

  // How to track which cards have been clicked?
  // Read odin useEffect

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
        <Card
          key={card.id}
          id={card.id}
          name={card.name}
          url={card.url}
          onClick={() => setCards(shuffleArray(cardLevel))} // Randomise cards after each click
        />
      ))}
    </div>
  );
}
