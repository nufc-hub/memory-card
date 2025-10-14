import '../styles/Card.css';

export default function Card({ title, url, onClick }) {
  return (
    <button className="card" onClick={onClick}>
      <div className="card-contents">
        <img src={url} alt={title} />
        <p>{title}</p>
      </div>
    </button>
  );
}
