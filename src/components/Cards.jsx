import '../styles/Cards.css';
import { foodData } from '../constants/cardData';

export default function Cards() {
  // Loop through the cardData array in constants/cardData.js instead of looping through this
  const cards = foodData;
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
