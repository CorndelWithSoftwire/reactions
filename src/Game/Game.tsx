import React, {FunctionComponent, useState} from "react";
import styles from "./Game.module.scss";
import {Board} from "./Board/Board";
import {ScoreBoard} from "./ScoreBoard/ScoreBoard";

export const Game: FunctionComponent = () => {
    const [score, setScore] = useState(0);
    
    const incrementScore = () => {
        setScore(score + 10);
    }
    
    return (
        <section className={styles.content}>
            <ScoreBoard score={score}/>
            <Board incrementScore={incrementScore}/>
        </section>
    );
};
