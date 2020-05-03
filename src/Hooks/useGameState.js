import React,{useState,useEffect} from 'react';
import Utils from './../utils/util'

//function useGameState(){
const useGameState = () => {
    const [stars, setStars] = useState(Utils.random(1, 9));
    //candidateNums
    //wrongNums is not recommended to use numbers wrongs to the state because
    //          it will be changed by another containers. Example: usedNums
    //          Don't put in the state anything that could be computed by the
    //          from the otherthings that you have in the state
    //usedNums
    //availableNums

    const [availableNums, setAvailableNums] = useState(Utils.range(1, 9));
    const [candidateNums, setCandidateNums] = useState([]);
    const [secondsLeft, setSecondsLeft] = useState(10);
    //setInterval, setTimeout
    useEffect(() => {
        if (secondsLeft > 0 && availableNums.length > 0) {
            const timerId = setTimeout(() => {
                setSecondsLeft(secondsLeft - 1);
            }, 1000);
            return () => clearTimeout(timerId)
        }
    });

    const setGameState = (newCandidateNums) => {
        if (Utils.sum(newCandidateNums) !== stars) {
            setCandidateNums(newCandidateNums)
        } else {
            const newAvailableNums = availableNums.filter(
                n => !newCandidateNums.includes(n)
            );

            setStars(Utils.randomSumIn(newAvailableNums, 9));
            setAvailableNums(newAvailableNums);
            setCandidateNums([]);
        }
    }
    return {stars, availableNums,candidateNums, secondsLeft,setGameState};

}

export default useGameState;