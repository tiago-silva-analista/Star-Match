import React,{useState} from 'react';
import Game from './Game';

const StartMatch = () =>{
    const [gameId,setGameId] = useState(1);
    return <Game key={gameId} startNewGame={() => setGameId(gameId +1)}
    />
}

export default StartMatch;