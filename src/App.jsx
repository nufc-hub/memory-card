import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';

function App() {
  return (
    <div>
      <Header />
      <Scoreboard />
    </div>
  );
}

export default App;
