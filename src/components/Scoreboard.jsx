import '../styles/Scoreboard.css';

export default function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className="scoreboard">
      <div className="scorecard" id="currentScore">
        <p>
          Current Score: <span>{currentScore}</span>
        </p>
      </div>
      <div className="scorecard" id="bestScore">
        <p>
          Best Score: <span>{bestScore}</span>
        </p>
      </div>
    </div>
  );
}
