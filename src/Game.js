import React, { useState, useEffect } from 'react';
import Number from './Component/NumberComponent'
import StarDisplay from './Component/StarDisplay';
import PlayAgain from './Component/PlayAgain';
import useGameState from   './Hooks/useGameState'
import Utils from './utils/util';


const Game = (props) => {
    //const [stars, setStars] = useState(Utils.random(1, 9));
    //candidateNums
    //wrongNums is not recommended to use numbers wrongs to the state because
    //          it will be changed by another containers. Example: usedNums
    //          Don't put in the state anything that could be computed by the
    //          from the otherthings that you have in the state
    //usedNums
    //availableNums

    // const [availableNums, setAvailableNums] = useState(Utils.range(1, 9));
    // const [candidateNums, setCandidateNums] = useState([]);
    // const [secondsLeft, setSecondsLeft] = useState(10);
    // //setInterval, setTimeout
    // useEffect(() => {
    //     if (secondsLeft > 0 && availableNums.length > 0) {
    //         const timerId = setTimeout(() => {
    //             setSecondsLeft(secondsLeft - 1);
    //         }, 1000);
    //         return () => clearTimeout(timerId)
    //     }
    // });
    const {stars,
            availableNums,
            candidateNums,
            secondsLeft,
            setGameState} = useGameState();

    const candidatesWrong = Utils.sum(candidateNums) > stars;
    // const gameIsDone = availableNums.length === 0;
    // const gameIsLost = secondsLeft === 0;
    const gameStatus = availableNums.length === 0
    ? 'won'
    :secondsLeft === 0 ? 'lost': 'active';

    const numberStatus = (number) => {
        if (!availableNums.includes(number)) {
            return 'used';
        }
        if (candidateNums.includes(number)) {
            return candidatesWrong ? 'wrong' : 'candidate';
        }
        return 'available'

    }

    // const resetGame = () => {
    //     setStars(Utils.random(1, 9));
    //     setAvailableNums(Utils.range(1, 9));
    //     setCandidateNums([]);
    // }

    const onNumberclick = (number, currentStatus) => {
        //currentStatus => newStatus

        if (gameStatus !== 'active' || currentStatus == 'used') { return; }

        const newCandidateNums =
            currentStatus === 'available'
                ? candidateNums.concat(number)
                : candidateNums.filter(cn => cn !== number)

        setGameState(newCandidateNums);

    }


    return (
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
        </div>
            <div className="body">
                <div className="left">
                    {gameStatus !== 'active' ? (
                        <PlayAgain onClick={props.startNewGame} gameStatus = {gameStatus}  />
                    )
                        : (<StarDisplay maxNumber={stars} />)}
                </div>
                <div className="right">
                    {Utils.range(1, 9).map(numberId =>
                        /**
                         * We need to send to Number Components the information about the
                         * state numbers used and candidates. We don't need to send all numbers
                         * only a boolean to check if the number is used or candidate
                         */
                        <Number
                            key={numberId}
                            status={numberStatus(numberId)}
                            numberId={numberId}
                            onClick={onNumberclick} />
                    )}

                </div>
            </div>
            <div className="timer">Time Remaining: {secondsLeft}</div>
        </div>
    );
};





// Math science

export default Game;