import '../styles/Scoreboard.css';

export default function Scoreboard() {
  return (
    <div className="scoreboard">
      <div className="scorecard" id="currentScore">
        <p>Current Score:</p>
      </div>
      <div className="scorecard" id="bestScore">
        <p>Best Score:</p>
      </div>
    </div>
  );
}
