import '../styles/Cards.css';

export default function Cards() {
  const cards = [
    { id: 1, title: 'sushi' },
    { id: 2, title: 'ramen' },
    { id: 3, title: 'kimbap' },
    { id: 4, title: 'teokk' },
  ];
  return (
    <div className="cards">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <p>{card.title}</p>
        </div>
      ))}
    </div>
  );
}
