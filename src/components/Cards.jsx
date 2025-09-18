import '../styles/Cards.css';
import { useState } from 'react';
import { foodData } from '../constants/cardData';
import shuffleArray from '../utils/shuffleArray';

export default function Cards({ level }) {
  // Get foodData array and randomise its contents
  const [cards, setCards] = useState(shuffleArray(foodData));

  // If level 1 show three cards
  // level 2 six
  // level 3 nine
  // level 4 twelve
  return (
    <div className="cards">
      {cards.map((card) => (
        <button key={card.id} className="card">
          <div className="card-contents">
            <img src={card.url} alt="sushi" />
            <p>{card.name}</p>
          </div>
        </button>
      ))}
    </div>
  );
}
