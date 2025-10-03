import { use, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Cards from './components/Cards';
import EndGameScreen from './components/EndGameScreen';
import Footer from './components/Footer';
import References from './components/References';

function App() {
  const [level, setLevel] = useState(1); // Sets the game level, i.e. how many cards shown
  const [activePage, setActivePage] = useState('home'); // Switches between different pages on site
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [result, setResult] = useState(''); // win, lose or empty string during gameplay

  // Used in EndGameScreen - when restarting game
  function handleRestartClick() {
    // Set level back to 1
    setLevel(1);
    // Go back to homepage
    setActivePage('home');
    // Check if score higher than best score, if yes, increase best score
    currentScore > bestScore ? setBestScore(currentScore) : bestScore;
    // Set score back to 0
    setCurrentScore(0);
    // Sets results from win/lose to neutral
    setResult('');
  }

  // Used when moving to references page
  function resetGame() {
    setLevel(1);
    setCurrentScore(0);
  }

  return (
    <div>
      {activePage === 'home' && (
        // Homepage
        <>
          <Header />
          <Scoreboard currentScore={currentScore} bestScore={bestScore} />
          <Cards
            level={level}
            setActivePage={setActivePage}
            setLevel={setLevel}
            setCurrentScore={setCurrentScore}
            setResult={setResult}
          />
          <Footer setActivePage={setActivePage} resetGame={resetGame} />
        </>
      )}

      {activePage === 'endGame' && (
        // End game screen
        <>
          <Header />
          <Scoreboard currentScore={currentScore} bestScore={bestScore} />
          <EndGameScreen
            currentScore={currentScore}
            onClick={handleRestartClick}
          />
        </>
      )}

      {
        // References page
        activePage === 'references' && (
          <References setActivePage={setActivePage} />
        )
      }
    </div>
  );
}

export default App;
