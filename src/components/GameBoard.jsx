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
    // If card was already clicked, then game over
    if (clickedIds.includes(id)) {
      setResult('lose');
      setActivePage('endGame');
      return;
    }

    // Add card ID to clicked list
    const updatedClickedIds = [...clickedIds, id];
    setClickedIds(updatedClickedIds);

    // Increase score
    setCurrentScore((prevCurrentScore) => prevCurrentScore + 1);

    // Check if player has clicked all cards (win)
    if (updatedClickedIds.length === cardsData.length) {
      setResult('win');
      setActivePage('endGame');
      return;
    }

    // If player completed the current level, move to next
    if (updatedClickedIds.length === cards.length) {
      setLevel((prevLevel) => prevLevel + 1);
    }

    // Shuffle cards after every successful click
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

  return (
    <div className="game-board">
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
