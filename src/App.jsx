import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div>
      {activePage === 'home' && (
        // Homepage
        <>
          <Header />
          <Scoreboard />
          <Cards />
          <Footer />
        </>
      )}

      {
        // References page
        activePage === 'references' && <References />
      }
    </div>
  );
}

export default App;
