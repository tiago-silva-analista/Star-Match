import React, { useState } from 'react';
import StarMatch from './StarMatch'
import logo from './logo.svg';
import './App.css';

function App() {
  const [gameId,setGameId] = useState(1);
  return (
    <div className="App" >
        <StarMatch />
    </div>
  );
}

export default App;
