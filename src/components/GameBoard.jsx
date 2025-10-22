import '../styles/GameBoard.css';
import { useState, useEffect } from 'react';
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
    const updatedClickedIds = [...clickedIds, id];
    setClickedIds(updatedClickedIds);

    // Increases the score by 1
    setCurrentScore((prevCurrentScore) => prevCurrentScore + 1);

    // Check if win condition has been met
    if (updatedClickedIds.length === cardsData.length) {
      setResult('win');
      setActivePage('endGame');
      return;
    }

    if (updatedClickedIds.length === cards.length) {
      setLevel((prevLevel) => prevLevel + 1);
    }

    // Shuffle cards
    setCards((prevCards) => shuffleArray(prevCards));
  }
  // Reset cards and clicks when level changes
  useEffect(() => {
    let numberOfCards;
    if (level === 1) numberOfCards = 3;
    else if (level === 2) numberOfCards = 6;
    else if (level === 3) numberOfCards = 9;
    else numberOfCards = cardsData.length; // Level 4 shows all cards

    const nextCards = shuffleArray(cardsData.slice(0, numberOfCards));
    setCards(nextCards);
    setClickedIds([]);
  }, [level, cardsData]);

  // Render
  return (
    <div className="cards">
      {cards.map(({ id, title, url }) => (
        <Card
          key={id}
          title={title}
          url={url}
          onClick={() => handleCardClick(id)}
        />
      ))}
    </div>
  );
}
