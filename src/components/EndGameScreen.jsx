import '../styles/EndGameScreen.css';
// End game display
export default function EndGameScreen({ currentScore, restartClick, result }) {
  // Create win message depending on if it's a win or a lose
  let winMessage = '';
  result === 'win' ? (winMessage = 'win') : (winMessage = 'lose');

  return (
    <div className="end-game-screen">
      <div className="end-game-box">
        <div className="end-game-box-top">
          <p>
            You <span>{winMessage}</span>!
          </p>
        </div>
        <div className="end-game-box-bottom">
          <div className="end-game-score">
            <p>
              {/* Displays end game score */}
              Score: <span>{currentScore}</span>
            </p>
          </div>
          {/* Restarts game */}
          <button className="restart-game-button" onClick={restartClick}>
            Restart Game
          </button>
        </div>
      </div>
    </div>
  );
}
