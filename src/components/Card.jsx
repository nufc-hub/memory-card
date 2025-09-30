import '../styles/Card.css';

export default function Card({ id, name, url, onClick }) {
  return (
    <button className="card" onClick={onClick}>
      <div className="card-contents">
        <img src={url} alt={name} />
        <p>{name}</p>
      </div>
    </button>
  );
}
