import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Cards from './components/Cards';
import EndGameScreen from './components/EndGameScreen';
import Footer from './components/Footer';
import References from './components/References';

function App() {
  const [activePage, setActivePage] = useState('endGame'); // Switches between different pages on site
  const [level, setLevel] = useState(1); // Sets the game level, i.e. how many cards shown
  const [currentScore, setCurrentScore] = useState(0); // This may go in scoreboard component
  const [bestScore, setBestScore] = useState(0); // This may go in scoreboard component

  return (
    <div>
      {activePage === 'home' && (
        // Homepage
        <>
          <Header />
          <Scoreboard currentScore={currentScore} bestScore={bestScore} />
          <Cards level={level} setLevel={setLevel} />
          <Footer setActivePage={setActivePage} />
        </>
      )}

      {activePage === 'endGame' && (
        // End game screen
        <>
          <Header />
          <Scoreboard currentScore={currentScore} bestScore={bestScore} />
          <EndGameScreen currentScore={currentScore} />
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
