import { useState, useEffect } from 'react';
import { fetchGifs } from './utils/fetchGifs';
import { apiKey, GIF_IDS, GIF_TITLES } from './config/giphyConfig';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Cards from './components/GameBoard';
import EndGameScreen from './components/EndGameScreen';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [level, setLevel] = useState(1); // Sets the game level, i.e. how many cards shown
  const [gifs, setGifs] = useState([]); // Stores the loaded gifs - to be used by the cards
  const [activePage, setActivePage] = useState('home'); // Switches between different pages on site
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [result, setResult] = useState(''); // win, lose or empty string during gameplay

  // Get card image files
  useEffect(() => {
    async function loadGifs() {
      const data = await fetchGifs(apiKey, GIF_IDS, GIF_TITLES);
      setGifs(data);
    }
    loadGifs();
  }, []);

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

  return (
    <div className="main">
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
            cardsData={gifs} // Maybe change the name depending on what is in this gifs data prop
          />
          <Footer />
        </>
      )}

      {activePage === 'endGame' && (
        // End game screen
        <>
          <Header />
          <Scoreboard currentScore={currentScore} bestScore={bestScore} />
          <EndGameScreen
            currentScore={currentScore}
            restartClick={handleRestartClick}
            result={result}
          />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
