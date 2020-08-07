import React, {FunctionComponent} from "react";
import styles from "./GameOver.module.scss";

interface GameOverProps {
    startGame: () => void;
} 

export const GameOver: FunctionComponent<GameOverProps> = ({startGame}) => {
    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Contratulations, you finished the Game</h1>
            <button className={styles.button} onClick={startGame}>Try again</button>
        </section>
    );
}