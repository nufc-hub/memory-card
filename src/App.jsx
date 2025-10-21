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
  const [level, setLevel] = useState(1);
  const [gifs, setGifs] = useState([]);
  const [activePage, setActivePage] = useState('home');
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [result, setResult] = useState(''); // win, lose or ''

  // Load GIFs on ititial render
  useEffect(() => {
    async function loadGifs() {
      try {
        const data = await fetchGifs(apiKey, GIF_IDS, GIF_TITLES);
        setGifs(data);
      } catch (error) {
        console.error('Failed to load GIFs:', error);
      }
    }
    loadGifs();
  }, []);

  // Used in EndGameScreen - restart when game is finished
  function handleRestartClick() {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
    setCurrentScore(0);
    setLevel(1);
    setActivePage('home');
    setResult('');
  }

  return (
    <div className="main">
      {activePage === 'home' ? (
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
      ) : (
        activePage === 'endGame' && (
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
        )
      )}
    </div>
  );
}

export default App;
