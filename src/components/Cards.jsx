import '../styles/Cards.css';
import { useState, useEffect } from 'react';
// import { foodData } from '../constants/cardData';
import Card from './Card';
import shuffleArray from '../utils/shuffleArray';

export default function Cards({
  level,
  setActivePage,
  setLevel,
  setCurrentScore,
  setResult,
  cardsData,
}) {
  const [cards, setCards] = useState([]);
  const [clickedIds, setClickedIds] = useState([]);

  function handleCardClick(id) {
    // Checks if card has been clicked already
    if (clickedIds.includes(id)) {
      setResult('lose');
      setActivePage('endGame');
      return;
    }

    // Adds the card ID to the clickedIds array so if the same card is clicked again - game over
    const newClicked = [...clickedIds, id];
    setClickedIds(newClicked);

    // Increases the score by 1
    setCurrentScore((prevCurrentScore) => prevCurrentScore + 1);

    // Check if win condition has been met
    if (newClicked.length === cardsData.length) {
      setResult('win');
      setActivePage('endGame');
      return;
    }

    if (newClicked.length === cards.length) {
      // If newClicked.length === cards.length, increase level by one and render next level
      setLevel((prevLevel) => prevLevel + 1);
    }

    // Shuffle cards
    setCards(shuffleArray(cards));
  }
  //Introduce new cards (reset state) when level changes
  useEffect(() => {
    let nextCards;
    // Get cardsData array for each level and randomise its contents
    if (level === 1)
      nextCards = cardsData.slice(0, 3); // Three cards
    else if (level === 2)
      nextCards = cardsData.slice(0, 6); // Six cards
    else if (level === 3)
      nextCards = cardsData.slice(0, 9); // Nine cards;
    else nextCards = cardsData; // Twelve cards

    // Shuffle and display cards for appropriate level
    setCards(shuffleArray(nextCards));
    // Reset clickedIds - this resets ID's even when restarting or resetting game
    setClickedIds([]);
  }, [level, cardsData]);

  // Render
  return (
    <div className="cards">
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          url={card.url}
          onClick={() => handleCardClick(card.id)}
        />
      ))}
    </div>
  );
}
